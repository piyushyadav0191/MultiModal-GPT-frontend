"use client"
import React, { FC } from "react";
import ChatPage from "~/components/chat/chat-page";

const Chat: FC = () => {
     const [chatId, setChatId] = React.useState<string>("");
     return <ChatPage chatId={chatId} setChatId={setChatId} />;
};

export default Chat;
