"use client";

import {
  ChatBubbleIcon,
  FileTextIcon,
  GlobeIcon,
  PaperPlaneIcon,
  CodeIcon
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid"; 
import { BentoCard, BentoGrid } from "~/components/ui/bento-grid";

const features = [
  {
    Icon: ChatBubbleIcon,
    name: "Chat with our AI",
    description:
      "Engage in intelligent conversations with our advanced AI-powered chat system. Get answers, brainstorm ideas, or simply enjoy a thoughtful discussion.",
    type: "chat",
    cta: "Click to open",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileTextIcon,
    name: "Chat with your PDF",
    description:
      "Engage in intelligent conversations with your PDF files. Get answers, brainstorm ideas, or simply enjoy a thoughtful discussion.",
    type: "pdf",
    cta: "Click to open",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Chat with any Website",
    description:
      "Engage in intelligent conversations with any website. Get answers, brainstorm ideas, or simply enjoy a thoughtful discussion.",
    type: "website",
    cta: "Click to open",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: PaperPlaneIcon,
    name: "Chat with Research Papers",
    description:
      "Engage in intelligent conversations with research papers. Get answers, brainstorm ideas, or simply enjoy a thoughtful discussion.",
    type: "research",
    cta: "Click to open",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: CodeIcon,
    name: "Coding Assistant",
    description:
      "Engage in intelligent conversations with your code. Get answers, brainstorm ideas, or simply enjoy a thoughtful discussion.",
    type: "coding",
    cta: "Click to open",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function PlaygroundGrid() {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    const uniqueId = uuidv4();
    router.push(`playground/${type}/${uniqueId}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <BentoGrid className="lg:grid-rows-3 max-w-screen-lg w-full p-4">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            onClick={() => handleNavigation(feature.type)}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
