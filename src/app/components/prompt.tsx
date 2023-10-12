"use client";

import React from "react";
import type Prompt from "../types/prompt";
import ChatDetail from "./chat-detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ChatData } from "../models/ChatData";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

const PromptCompoment: React.FC<{ prompt: Prompt | undefined }> = ({
  prompt,
}) => {
  const responseIsReady = prompt?.responseStatus != "Waiting";
  console.log(responseIsReady);
  if (
    (prompt?.input === "" || prompt?.input === null) &&
    (prompt?.response === "" || prompt?.response === null)
  ) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="prompt-input">
          <div className="prompt-input-text">
            <ChatDetail
              initial="You"
              isBot={false}
              text={prompt?.input}
              sources={prompt?.sources ?? []}
            />
          </div>
        </div>
        <div className="prompt-response">
          <div className="prompt-response-text">
            {responseIsReady ? (
              <ChatDetail
                initial="Ai"
                isBot={true}
                text={prompt?.response}
                sources={prompt?.sources ?? []}
              />
            ) : (
              <FontAwesomeIcon icon={faSpinner} className=" animate-spin" />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default PromptCompoment;
