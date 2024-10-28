"use client"

import React from "react";
import ChatBottombar from "./chat-bottombar";
import ChatList from "./chat-lists";
import { ChatOptions } from "./chat-options";
import ChatTopbar from "./chat-topbar";

export interface ChatProps {
  chatId?: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
  messages: any[];
  input?: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Updated type
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  error?: string;
  stop: () => void;
}

export interface ChatTopbarProps {
  chatOptions: ChatOptions;
  setChatOptions: React.Dispatch<React.SetStateAction<ChatOptions>>;
}

export default function Chat({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
  stop,
  chatOptions,
  setChatOptions,
  chatId,
  setChatId,
}: ChatProps & ChatTopbarProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar
        chatOptions={chatOptions} // Use passed chatOptions
        setChatOptions={setChatOptions}
        isLoading={isLoading}
        chatId={chatId}
        setChatId={setChatId}
        messages={messages}
      />

      <ChatList messages={messages} isLoading={isLoading} />

      <ChatBottombar
        selectedModel={chatOptions.selectedModel}
        input={input || ""} 
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
      />
    </div>
  );
}
