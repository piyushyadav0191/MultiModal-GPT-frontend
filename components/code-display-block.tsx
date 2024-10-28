"use client";
import React from "react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { CodeBlock, dracula, github,a11yDark } from "react-code-blocks";
import { Button } from "./ui/button";

interface ButtonCodeblockProps {
  code: string;
  lang: string;
}

export default function CodeDisplayBlock({ code, lang }: ButtonCodeblockProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const { theme } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="relative my-4 flex flex-col text-start">
      <CodeBlock
        customStyle={
          theme === "dark"
            ? { background: "#303033" }
            : { background: "#fcfcfc" }
        }
        text={code}
        language="tsx"
        showLineNumbers={true}
        theme={theme === "dark" ? dracula : github}
        
      />
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size="sm"
        className="h-10 w-10 absolute top-2 right-2 z-10" // Increased size and added z-index
      >
        {isCopied ? (
          <CheckIcon className="w-6 h-6" />
        ) : (
          <CopyIcon className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
}
