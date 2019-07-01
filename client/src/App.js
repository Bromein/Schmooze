import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ChatInput from "./components/ChatInput/ChatInput";
import io from "socket.io-client";

function App() {
  const socket = io("http://localhost:7770");

  return (
    <div className="container">
      <Sidebar />
      <Header />
      <ChatList />
      <ChatInput />
      <Footer />
    </div>
  );
}

export default App;
