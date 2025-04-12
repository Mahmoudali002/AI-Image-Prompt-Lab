"use client";

import PromptEditor from "@/components/PromptEditor";
import ImagePreview from "@/components/ImagePreview";
import PromptManagement from "@/components/PromptManagement";
import ThemeToggle from "@/components/ThemeToggle";
import AIPromptEnhancement from "@/components/AIPromptEnhancement";
import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Toaster} from "@/components/ui/toaster";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";

const MainLayout: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  const handleSuggestionsReceived = (newSuggestions: string[]) => {
    setSuggestions(newSuggestions);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <header className="flex items-center justify-between py-4 px-6 border-b">
        <div className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6 text-primary"/>
          <span className="text-lg font-semibold">PromptForge AI</span>
        </div>
        <ThemeToggle/>
      </header>
      <main className="container pt-10 flex-1">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <PromptEditor onPromptChange={handlePromptChange}/>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <ImagePreview prompt={prompt}/>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <AIPromptEnhancement
                prompt={prompt}
                onSuggestionsReceived={handleSuggestionsReceived}
              />
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="py-2 border-b">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Management</CardTitle>
            </CardHeader>
            <CardContent>
              <PromptManagement/>
            </CardContent>
          </Card>

        </div>
      </main>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
