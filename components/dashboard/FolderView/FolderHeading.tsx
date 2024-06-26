"use client";

import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ProgressLabel } from "./ProgressLabel";
import { useGetFolderById } from "@/hooks/folder.hooks";
import { useGetDocumentsByFolderId } from "@/hooks/document.hooks";
import CustomButton from "@/components/Button";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface HeadingProps {
  folderId: string;
}

export const FolderHeading: React.FC<HeadingProps> = ({ folderId }) => {
  const router = useRouter();
  const { data: folder, isLoading: folderLoading } = useGetFolderById(folderId);
  const { data: documents = [], isLoading: documentsLoading } =
    useGetDocumentsByFolderId(folderId);

  const incompleteRead = useMemo(() => {
    if (!documents) return 0;
    return documents.filter(
      (doc: { status: string }) => doc.status === "unread"
    ).length;
  }, [documents]);

  const completeRead = useMemo(() => {
    if (!documents) return 0;
    return documents.filter((doc: { status: string }) => doc.status === "read")
      .length;
  }, [documents]);

  const progress = useMemo(() => {
    if (incompleteRead + completeRead === 0) return 0;
    return (completeRead / (incompleteRead + completeRead)) * 100;
  }, [incompleteRead, completeRead]);

  if (folderLoading || documentsLoading) {
    return (
      <div className="flex flex-col items-bottom justify-start px-6 pt-10 pb-5 border-b border-gray-200">
        <Spinner />
      </div>
    );
  }

  if (!folder) {
    return (
      <div className="w-full flex flex-col items-bottom justify-start px-6 pt-10 pb-5 border-b border-gray-200">
        <h1 className="text-xl font-bold">Folder not found</h1>
        <Text fontSize="sm" mb={6}>
          Oops! The folder you are looking for does not exist.
        </Text>
        <CustomButton size="3xs" onClick={() => router.push("/dashboard")}>
          Go Home
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-bottom justify-start px-6 pt-10 pb-5 border-b border-gray-200">
      <h1 className="text-xl font-bold">{folder.name}</h1>
      <div className="flex px-2 py-4 flex-row justify-between items-center text-gray-800">
        <div className="flex flex-row items-center space-x-4">
          <CircularProgress fontWeight="semibold" color="teal" value={progress}>
            <CircularProgressLabel>
              {progress.toFixed(1)}%
            </CircularProgressLabel>
          </CircularProgress>
          <p className="text-sm font-normal">Completion</p>
        </div>
        <div className="flex flex-row space-x-4">
          <ProgressLabel label="to read" metric={incompleteRead} />
          <ProgressLabel label="completed" metric={completeRead} />
        </div>
      </div>
    </div>
  );
};
