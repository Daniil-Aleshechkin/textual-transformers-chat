"use client";

import React, { useEffect, useState } from "react";
import generateRandomGuid from "../utils/guid";
import type Prompt from "../types/prompt";
import PromptCompoment from "./prompt";
import sleep from "../utils/sleep";

const Chat: React.FC = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>({
    id: "",
    input: "",
    response: null,
    responseStatus: "Ready",
  });

  const handleSendMessage = (id: string) => {
    if (currentPrompt?.responseStatus != "Waiting") {
      setCurrentPrompt({
        id: id,
        input: inputMessage,
        response: null,
        responseStatus: "Waiting",
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
      console.log(`Sending message: ${inputMessage}`);
      await sleep(2000);
      const response = "Hello! thanks for your question";

      let oldPrompts = [...prompts];
      oldPrompts.push({
        id: currentPrompt.id,
        input: currentPrompt.input,
        response: response,
        responseStatus: "Success",
      });
      setPrompts(oldPrompts);

      setCurrentPrompt({
        id: "",
        input: "",
        response: null,
        responseStatus: "Ready",
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
        <button className="chat-input-sendbutton" onClick={() => handleSendMessage(generateRandomGuid())}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
