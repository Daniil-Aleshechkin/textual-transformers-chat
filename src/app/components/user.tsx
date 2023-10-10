import React from "react";
import {ChatData} from "../models/ChatData";

export const User: React.FC<{chatdetails: ChatData}> = props => 
{
    return  <React.Fragment>
                <div className = "chat-box">
                    <div className = "chat-user">{props.chatdetails.name}</div>
                    <p className = "chat-text">{props.chatdetails.texts}</p>
                </div>
            </React.Fragment>
}