import { useEditFolderMutation, useFolderByIdQuery } from '@/entities/folder';
import { InputBase, Skeleton } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useEffect } from 'react';

interface FolderTitleProps {
  id: string;
}

const FolderTitle = ({ id }: FolderTitleProps) => {
  const { data, isSuccess, isError, isLoading } = useFolderByIdQuery(id);
  const [edit] = useEditFolderMutation();

  const [title, setTitle] = useInputState(data?.title || '');

  useEffect(() => {
    setTitle(data?.title);
  }, [data]);

  if (isError) return null;
  if (isLoading)
    return (
      <Skeleton my="13px" h="34px">
        <InputBase
          variant="unstyled"
          placeholder="Название"
          size="md"
          styles={{
            input: {
              fontWeight: 'bold',
              fontSize: '34px',
            },
          }}
        />
      </Skeleton>
    );

  return (
    <InputBase
      styles={{
        input: {
          fontWeight: 'bold',
          fontSize: '34px',
        },
      }}
      onBlur={() => {
        if (isSuccess) edit({ id: data.id, emoji: data.emoji, title });
      }}
      color="dark"
      value={title}
      onChange={setTitle}
      size="xl"
      variant="unstyled"
      placeholder="Название"
    />
  );
};

export default FolderTitle;
