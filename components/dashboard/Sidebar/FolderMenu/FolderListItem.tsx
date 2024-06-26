import { Circle } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { FolderItemAction } from './FolderItemAction';
import { Folder } from '@/types/folder.types';
import { useGetDocumentsByFolderId } from '@/hooks/document.hooks';
import { useRouter } from 'next/navigation';

interface FolderListItemProps {
  folder: Folder;
  handleDeleteFolder: () => void;
}

const FolderListItem: React.FC<FolderListItemProps> = ({
  folder,
  handleDeleteFolder,
}) => {
  const router = useRouter();
  const { data: documents = [] } = useGetDocumentsByFolderId(folder.id);

  const numIncompleteReads = useMemo(() => {
    return documents.filter(
      (doc: { status: string }) => doc.status === 'unread'
    ).length;
  }, [documents]);

  return (
    <span
      className="group flex flex-row items-center justify-between cursor-pointer p-2"
      onClick={() => router.push(`/dashboard/${folder.id}`)}
    >
      <div className="flex flex-row items-center">
        <span className="w-3 h-3 mr-2 bg-gray-200"></span>
        <span className="truncate text-sm font-normal">
          {folder.name}
        </span>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        {numIncompleteReads > 0 && (
          <Circle size="1.25rem" bg="orange" color="white">
            <p className="text-xs">{numIncompleteReads}</p>
          </Circle>
        )}
        <FolderItemAction
          handleDeleteFolder={handleDeleteFolder}
          className="transition ease-in-out delay-150 group-hover:block group-active:block hidden"
        />
      </div>
    </span>
  );
};

export default FolderListItem;
