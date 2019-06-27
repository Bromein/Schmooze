import React from "react";

import "./ChatInput.css";

const ChatInput = () => {
  return (
    <div className="chatinput">
      <form className="flex-form">
        <input
          className="inputfield"
          type="text"
          placeholder="Enter your message.."
        />
        <button className="btn-go" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
