"use client";

import React, { useState } from "react";
import generateRandomGuid from "../utils/guid";

type PromptStatus = "Waiting" | "Ready" | "Failed";

interface Prompt {
  id: string;
  input: string;
  response: string;
  responseStatus: PromptStatus;
}

const Chat: React.FC = () => {
  const [prompts, setMessages] = useState<Prompt[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [currentPrompt, setCurrentPrompt] = useState<Prompt>();

  const handleSendMessage = (id: String) => {
    console.log(`Sending message: ${inputMessage}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="chat-messages">
        {prompts.map((message, index) => (
          <div key={index}>
            <div>
              <span>{message.input}</span>
            </div>
            <div>
              <span>{message.response}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <input
          type="text"
          className=" text-black"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={() => handleSendMessage(generateRandomGuid())}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
