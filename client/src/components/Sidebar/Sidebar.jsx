import React, { useState } from "react";
import "./Sidebar.css";

//remove me later -- using to map over an array of online users
const activeUsers = [
  {
    name: "Joe",
    online: false,
    profileId: 1
  },
  {
    name: "Marie",
    online: false,
    profileId: 2
  },
  {
    name: "Jimmy",
    online: true,
    profileId: 2
  },
  {
    name: "Tom",
    online: true,
    profileId: 3
  }
];

//if this gets too big, break sidebar into 2 components
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">S</h2>
      <ul>
        {activeUsers.map(user =>
          user.online ? (
            <li key={user.profileId}>
              <a href={user.profileId}>{user.name}</a>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
