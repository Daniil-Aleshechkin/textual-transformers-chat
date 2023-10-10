import React from "react";
import type Prompt from "../types/prompt";

const PromptCompoment: React.FC<{ prompt: Prompt | undefined }> = ({
  prompt,
}) => {
  return (
    <div>
      <div>
        <span>{prompt?.input}</span>
      </div>
      <div>
        <span>{prompt?.response}</span>
      </div>
    </div>
  );
};

export default PromptCompoment;
