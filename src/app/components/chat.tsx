"use client";

import React, { useEffect, useState } from "react";
import generateRandomGuid from "../utils/guid";
import type Prompt from "../types/prompt";
import PromptCompoment from "./prompt";
import sleep from "../utils/sleep";

const pollsRequired: Number = 2;

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
    }
  };

  // Send prompt to get response
  useEffect(() => {
    if (currentPrompt?.responseStatus != "Waiting") {
      return () => {};
    }

    const getChatReponse = async () => {
      console.log(`Sending message: ${inputMessage}`);
      await sleep(2000);
    };

    let currentPolls = 0;

    const pollChatResponse = setInterval(() => {
      let response = "Hello! thanks for your question";

      if (currentPolls != pollsRequired) {
        getChatReponse();
        currentPolls += 1;
      } else {
        let oldPrompts = [...prompts];
        oldPrompts.push({
          id: currentPrompt!.id,
          input: currentPrompt!.input,
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
      }
    }, 5000);

    return () => clearInterval(pollChatResponse);
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
      <div className="">
        <input
          type="text"
          className=" text-black"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSendMessage(generateRandomGuid());
            }
          }}
        />
        <button onClick={() => handleSendMessage(generateRandomGuid())}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
