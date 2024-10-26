import React from "react";

// import { ChatRequestOptions } from "ai";
// import { Message } from "ai/react";

import ChatBottombar from "./chat-bottombar";
import ChatList from "./chat-lists";
import { ChatOptions } from "./chat-options";
import ChatTopbar from "./chat-topbar";

export interface ChatProps {
  chatId?: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
  messages?: any[];
  input?: string;
  handleInputChange?: () => void;
  handleSubmit?: () => void;
  isLoading: boolean;
  error?: undefined | Error;
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
    <div className="flex flex-col justify-between w-full h-full  ">
      <ChatTopbar
        chatOptions={{
          selectedModel: "gpt-3",
          temperature: 1,
          systemPrompt: "Tell me a story"
        }}
        setChatOptions={setChatOptions}
        isLoading={isLoading}
        chatId={chatId}
        setChatId={setChatId}
        messages={[]}
      />

      <ChatList messages={[]} isLoading={isLoading} />

      <ChatBottombar
        selectedModel={chatOptions.selectedModel}
        input={"hello"}
        handleInputChange={() => {}}
        handleSubmit={() => {}}
        isLoading={false}
        stop={stop}
      />
    </div>
  );
}
