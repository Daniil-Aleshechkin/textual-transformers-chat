import React from "react";
import type Prompt from "../types/prompt";
import { User } from "./user";
import { ChatData } from "../models/ChatData";


const PromptCompoment: React.FC<{ prompt: Prompt | undefined }> = ({
  prompt,
}) => {
  return (
    <div>
      <div className="prompt-input">
        <span>{prompt?.input}</span>
      </div>
      <div className="prompt-response">
        <span>{prompt?.response}</span>
      </div>
    </div>
  );
};

export default PromptCompoment;
