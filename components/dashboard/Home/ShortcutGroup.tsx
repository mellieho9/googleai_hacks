"use client";
import { Heading } from "@chakra-ui/react";
import { ShortcutButton } from "./ShortcutButton";
import PaperUpload from "@/components/modals/PaperUpload";
import { useState } from "react";

export function ShortcutGroup() {
  const [showUpload, setShowUpload] = useState(false);
  const handleClick = () => {
    setShowUpload(true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-20 border-b border-gray-200">
      <Heading size="md">What do you want to do today?</Heading>
      <div className="flex flex-row mt-3 space-x-2">
        <div onClick={handleClick}>
          <ShortcutButton>Read a paper</ShortcutButton>
        </div>
        {showUpload && <PaperUpload />}
        <ShortcutButton>Bookmark a paper</ShortcutButton>
        <ShortcutButton>Refresh on previous findings</ShortcutButton>
      </div>
    </div>
  );
}
