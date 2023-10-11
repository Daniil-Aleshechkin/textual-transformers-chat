import React from "react";
import type Prompt from "../types/prompt";
import ChatDetail from "./chat-detail";
import { ChatData } from "../models/ChatData";


const PromptCompoment: React.FC<{ prompt: Prompt | undefined }> = ({
  prompt,
}) => {
  console.log(prompt);
  if((prompt?.input===""||prompt?.input===null)&&(prompt?.response===""||prompt?.response===null)){
    return (<div></div>);
  }
  else{
    return (
      <div>
        <div className="prompt-input">
          <div className="prompt-input-text">
            <ChatDetail initial = "You" isBot={false} text={prompt?.input}/>
          </div>
        </div>
        <div className="prompt-response">
          <div className="prompt-response-text">
            <ChatDetail initial = "Ai" isBot={true} text={prompt?.response}/>
          </div>
        </div>
      </div>
    );
  }
};

export default PromptCompoment;
