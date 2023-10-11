import React from "react";

const ChatDetail: React.FC<{initial:string, isBot:boolean, text:string|undefined|null}> = props => 
{
    if(props.isBot)
        return  (
            <React.Fragment>
                <table>
                    <tr>
                        <td className = "chat-profile">
                            <div className = "chat-box-bot">
                                <span className = "chat-initial">{props.initial}</span>
                            </div>
                        </td>
                    <td><span className="chatText">{props.text}</span></td>
                    </tr>
                </table>  
            </React.Fragment>);
    else
        return (  
            <React.Fragment>
                <table>
                    <tr>
                        <td className = "chat-profile">
                            <div className = "chat-box-user">
                                <span className = "chat-initial">{props.initial}</span>
                            </div>
                        </td>
                        <td><span className="chatText">{props.text}</span></td>
                    </tr>
                </table>  
            </React.Fragment>
        );
}

export default ChatDetail;