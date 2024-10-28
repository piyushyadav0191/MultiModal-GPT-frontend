"use client";

import React from "react";
import ChatPage from "~/components/chat/chat-page";
import PlaygroundGrid from "~/components/playground-grid";

const PlaygroundPage = () => {
  const [chatId, setChatId] = React.useState<string>("");
  return (
    <>
      {/* <ChatPage chatId={chatId} setChatId={setChatId} /> */}
      <PlaygroundGrid />
    </>
  );
};

export default PlaygroundPage;
