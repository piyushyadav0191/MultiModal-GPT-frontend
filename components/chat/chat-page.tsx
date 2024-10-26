"use client";

import React from "react";

// import { ChatRequestOptions } from "ai";
// import { toast } from "sonner";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuidv4 } from "uuid";

import { ChatLayout } from "./chat-layout";
import { ChatOptions } from "./chat-options";
// import { basePath } from "@/lib/utils";

interface ChatPageProps {
  chatId: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
}
export default function ChatPage({ chatId, setChatId }: ChatPageProps) {
 
  
  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center ">
      <ChatLayout
        chatId={chatId}
        setChatId={setChatId}
        chatOptions={
          {
            selectedModel: "gpt-3.5-turbo",
            systemPrompt: "Talk to me",
            temperature: 0.5,
        }
        }
        // setChatOptions={setChatOptions}
        messages={[]}
        input={"hello world"}
        handleInputChange={() => {}}
        handleSubmit={() => {}}
        isLoading={false}
        // error={error}
        stop={() => {}}
        navCollapsedSize={10}
        defaultLayout={[30, 160]}
      />
    </main>
  );
}
