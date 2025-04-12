"use client";

import {useState, useEffect} from "react";

interface ImagePreviewProps {
  prompt: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({prompt}) => {
  const [imageUrl, setImageUrl] = useState<string>("https://picsum.photos/200/300");

  // In a real application, you might fetch a new image based on the prompt.
  useEffect(() => {
    // Here, we'll just keep using the placeholder image.
    // In a real app, call an API with the prompt and update the imageUrl.
    console.log("Prompt changed:", prompt);
  }, [prompt]);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Image Preview
      </label>
      <img
        src={imageUrl}
        alt="Image Preview"
        className="w-full h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

export default ImagePreview;
