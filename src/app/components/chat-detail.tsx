"use client";

import React, { useState } from "react";
import Source from "../types/source";
import Typewriter from "./typewriter";

const ChatDetail: React.FC<{
  initial: string;
  isBot: boolean;
  text: string | undefined | null;
  sources: Source[];
}> = (props) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const sourceLinks = showLinks
    ? props.sources.map((source, index) => (
        <a key={`LINK: ${index}`} href={source.filePath} target="_blank">
          {source.fileName}
        </a>
      ))
    : [];

  const handleFinishedTypeWriter = () => {
    setShowLinks(true);
  };

  if (props.isBot)
    return (
      <React.Fragment>
        <table>
          <tr>
            <td className="chat-profile">
              <div className="chat-box-bot">
                <div className="chat-initial">{props.initial}</div>
              </div>
            </td>
            <td className="chat-text-table">
              <Typewriter
                text={props.text}
                delay={10}
                finishedTypeWriter={handleFinishedTypeWriter}
              />
              <div className=" flex-col flex text-blue-500 bg-transparent underline">
                {sourceLinks}
              </div>
            </td>
          </tr>
        </table>
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <table>
          <tr>
            <td className="chat-profile">
              <div className="chat-box-user">
                <div className="chat-initial">{props.initial}</div>
              </div>
            </td>
            <td className="chat-text-table">
              <p className="chat-text">{props.text}</p>
            </td>
          </tr>
        </table>
      </React.Fragment>
    );
};

export default ChatDetail;
