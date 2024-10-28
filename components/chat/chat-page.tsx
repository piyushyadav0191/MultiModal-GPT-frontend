"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useChat } from "ai/react";
import { ChatLayout } from "./chat-layout";
import { CloudCog } from "lucide-react";
import { toast } from "sonner";

interface ChatPageProps {
  chatId: string;
  setChatId: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChatPage({ chatId, setChatId }: ChatPageProps) {
  interface Message {
    role: string;
    content: string;
  }

  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [stop, setStop] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!input) {
    return;
  }

  const newMessage = { role: "user", content: input };
  const updatedMessages = [...messages, newMessage];
  setMessages(updatedMessages);
  setInput("");
  setIsLoading(true);
  setError("");

  try {
    const response = await fetch("http://localhost:5000/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: input,
        history: updatedMessages,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Add assistant's response to messages without 'reference'
      const assistantMessage = {
        role: "assistant",
        content: data.response,
      };
      setMessages([...updatedMessages, assistantMessage]);
    } else {
      setError("Something went wrong");
    }
  } catch (error) {
    toast.error("Something went wrong");
    setError("Something went wrong");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center ">
      <ChatLayout
        chatId={chatId}
        setChatId={setChatId}
        setChatOptions={() => {}}
        chatOptions={{
          selectedModel: "gpt-3.5-turbo",
          systemPrompt: "Talk to me",
          temperature: 0.5,
        }}
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        stop={() => {}}
        navCollapsedSize={10}
        defaultLayout={[30, 160]}
      />
    </main>
  );
}
