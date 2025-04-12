"use client";

import {Button} from "@/components/ui/button";
import {enhancePrompt} from "@/ai/flows/enhance-prompt";
import {useState} from "react";

interface AIPromptEnhancementProps {
  prompt: string;
  onSuggestionsReceived: (suggestions: string[]) => void;
}

const AIPromptEnhancement: React.FC<AIPromptEnhancementProps> = ({prompt, onSuggestionsReceived}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleEnhancePrompt = async () => {
    setLoading(true);
    try {
      const result = await enhancePrompt({prompt: prompt});
      onSuggestionsReceived(result.suggestions);
    } catch (error) {
      console.error("Error enhancing prompt:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        AI Prompt Enhancement
      </label>
      <Button onClick={handleEnhancePrompt} disabled={loading}>
        {loading ? "Loading..." : "Enhance Prompt"}
      </Button>
    </div>
  );
};

export default AIPromptEnhancement;
