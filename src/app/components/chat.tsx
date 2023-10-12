"use client";

import React, { useEffect, useState } from "react";
import generateRandomGuid from "../utils/guid";
import type Prompt from "../types/prompt";
import PromptCompoment from "./prompt";
import sleep from "../utils/sleep";
import axios from "axios";

interface ChatAPIResponse {
  response: string;
  sources: ChatAPISource[];
}

interface ChatAPISource {
  fileName: string;
  filePath: string;
}

const Chat: React.FC = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>({
    id: "",
    input: "",
    response: null,
    responseStatus: "Ready",
    sources: [],
  });

  const handleSendMessage = (id: string) => {
    if (currentPrompt?.responseStatus != "Waiting") {
      setCurrentPrompt({
        id: id,
        input: inputMessage,
        response: null,
        responseStatus: "Waiting",
        sources: [],
      });
      setInputMessage("");
    }
  };

  // Send prompt to get response
  useEffect(() => {
    if (currentPrompt?.responseStatus != "Waiting") {
      return;
    }

    const getChatReponse = async () => {
      let oldPrompts = [...prompts];

      try {
        const rawResponse = (
          await axios.post(
            "https://team8azureopenaiservice.azurewebsites.net/Chat",
            {
              Message: currentPrompt.input,
            },
            { headers: { "Content-Type": "application/json" } }
          )
        ).data as ChatAPIResponse;

        const response = rawResponse.response;
        //const response = "Hello! this is the server.\nThis should be a new line";

        oldPrompts.push({
          id: currentPrompt.id,
          input: currentPrompt.input,
          response: response,
          responseStatus: "Success",
          sources: rawResponse.sources,
        });
      } catch (error) {
        const response = error as string;
        console.log("There is error:");
        console.log(response);
        oldPrompts.push({
          id: currentPrompt.id,
          input: currentPrompt.input,
          response: response,
          responseStatus: "Failed",
          sources: [],
        });
      }

      setPrompts(oldPrompts);

      setCurrentPrompt({
        id: "",
        input: "",
        response: null,
        responseStatus: "Ready",
        sources: [],
      });
    };

    getChatReponse();
  }, [currentPrompt]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="chat-messages">
        {prompts.map((message, index) => (
          <PromptCompoment key={index} prompt={message} />
        ))}
        <PromptCompoment key="current-prompt" prompt={currentPrompt} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          className=" text-black chat-input-box"
          placeholder="Type a message..."
          value={inputMessage}
          disabled={currentPrompt.responseStatus == "Waiting"}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSendMessage(generateRandomGuid());
            }
          }}
        />
        <button
          className="chat-input-sendbutton"
          onClick={() => handleSendMessage(generateRandomGuid())}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
