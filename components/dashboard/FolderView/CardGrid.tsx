"use client";
import { Box, Heading } from "@chakra-ui/react";
import {
  AddCard,
  FolderCompleteCard,
  IncompleteCard,
} from "@/components/ReadingCard";
import { FilterDropdown } from "./FilterDropdown";
import { useState } from "react";
import { useGetFolderById } from "@/hooks/folder.hooks";
import { useGetDocumentsByFolderId } from "@/hooks/document.hooks";
import { format } from "timeago.js";
import PaperUpload from "@/components/modals/PaperUpload";

interface CardGridProps {
  folderId: string;
}

export function CardGrid({ folderId }: CardGridProps) {
  const [showUpload, setShowUpload] = useState(false);

  const { data: folder } = useGetFolderById(folderId);
  const { data: documents = [] } = useGetDocumentsByFolderId(folderId);

  const [groupBy, setGroupBy] = useState("default");

  const handleOpenUpload = () => {
    setShowUpload(true);
  };

  const handleCloseUpload = () => {
    setShowUpload(false);
  };

  const handleGroupByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupBy(event.target.value);
    console.log(groupBy);
  };

  return folder ? (
    <Box className="w-full space-y-4">
      <div className="flex flex-row justify-between items-center">
        <Heading size="sm" color="gray.800">
          Readings
        </Heading>
        <FilterDropdown onChange={handleGroupByChange} />
      </div>
      <Box display="flex" flexWrap="wrap" gap="2">
        {/* Displaying recently read items */}
        <div onClick={handleOpenUpload}>
          <AddCard />
        </div>
        {showUpload && (
          <PaperUpload isOpen={showUpload} onClose={handleCloseUpload} />
        )}
        {/* Displaying folder complete and incomplete items */}
        {documents.map((doc) =>
          doc.status === "read"
            ? groupBy !== "incomplete" && (
                <FolderCompleteCard
                  key={doc.id}
                  paperTitle={doc.title}
                  lastUpdatedTime={doc.updated_at}
                />
              )
            : groupBy !== "complete" && (
                <IncompleteCard key={doc.id} paperTitle={doc.title} />
              )
        )}
      </Box>
    </Box>
  ) : null;
}
