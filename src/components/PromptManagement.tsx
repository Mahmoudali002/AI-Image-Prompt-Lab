"use client";

import {Button} from "@/components/ui/button";
import {useState} from "react";

const PromptManagement: React.FC = () => {
  const [prompts, setPrompts] = useState<string[]>([]);
  const [newPrompt, setNewPrompt] = useState<string>("");

  const handleAddPrompt = () => {
    if (newPrompt.trim() !== "") {
      setPrompts([...prompts, newPrompt]);
      setNewPrompt("");
    }
  };

  const handleRemovePrompt = (index: number) => {
    const updatedPrompts = [...prompts];
    updatedPrompts.splice(index, 1);
    setPrompts(updatedPrompts);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Prompt Management
      </label>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter new prompt"
          value={newPrompt}
          onChange={(e) => setNewPrompt(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button onClick={handleAddPrompt} className="ml-2">
          Add
        </Button>
      </div>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b">
            {prompt}
            <Button variant="outline" size="sm" onClick={() => handleRemovePrompt(index)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptManagement;
