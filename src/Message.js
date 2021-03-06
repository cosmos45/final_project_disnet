import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          
          
        </h4>
        <h3><span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span></h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
