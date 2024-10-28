"use client";

import React from "react";
import ChatPage from "~/components/chat/chat-page";


const PlaygroundPage = () => {
  const [chatId, setChatId] = React.useState<string>("");
  return <ChatPage chatId={chatId} setChatId={setChatId} />;
};

export default PlaygroundPage;
