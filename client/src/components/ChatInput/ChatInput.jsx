import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessageRequest } from "../../store/actions";

import "./ChatInput.css";

const ChatInput = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const dispatch = useDispatch();
  const onMessageSend = message => dispatch(sendMessageRequest(message));

  const onChange = e => {
    setCurrentMessage(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();

    if (currentMessage.length) {
      onMessageSend({
        author: "aj",
        message: currentMessage
      });
      setCurrentMessage("");
    }
    return;
  };

  return (
    <div className="chatinput">
      <form onSubmit={onSubmit}>
        <input
          className="inputfield"
          name="message"
          type="text"
          onChange={onChange}
          value={currentMessage}
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
