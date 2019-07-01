import React from "react";
import { useSelector } from "react-redux";
import { sendMessageRequest } from "../../store/actions";

import "./ChatList.css";

const ChatList = () => {
  const messages = useSelector(state => state.messages);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div className="chatlist">
      {messages.map(message => (
        <div key={message.author} className="message">
          <img
            className="avatar"
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="avatar"
          />
          <div className="name">{message.author}</div>
          {message.message}
        </div>
      ))}
      <div />
    </div>
  );
};

export default ChatList;
