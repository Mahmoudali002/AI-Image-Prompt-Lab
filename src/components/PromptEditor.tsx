"use client";

import {Textarea} from "@/components/ui/textarea";
import {useEffect, useState} from "react";

interface PromptEditorProps {
  onPromptChange: (prompt: string) => void;
}

const PromptEditor: React.FC<PromptEditorProps> = ({onPromptChange}) => {
  const [prompt, setPrompt] = useState<string>("");

  useEffect(() => {
    onPromptChange(prompt);
  }, [prompt, onPromptChange]);

  return (
    <div className="flex flex-col">
      <label htmlFor="prompt" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Prompt
      </label>
      <Textarea
        id="prompt"
        placeholder="Enter your prompt here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default PromptEditor;
