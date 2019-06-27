import React, { useState, useEffect } from "react";

import "./ChatList.css";

const ChatList = () => {
  const fetchPosts = async () => {
    const response = await fetch(
      "http://jsonplaceholder.typicode.com/comments?_start=0&_limit=20/"
    );
    const data = await response.json();
    updateMessages(data);
  };

  const [messages, updateMessages] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [messages]);

  return (
    <div className="chatlist">
      {messages.map(message => (
        <div className="message">
          <img
            className="avatar"
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="avatar"
          />
          <div className="name">{message.email}</div>
          {message.body}
        </div>
      ))}
      <div />
    </div>
  );
};

export default ChatList;
