import { InputBase } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useEffect } from 'react';

interface FolderTitleState {
  folder: {
    title: string;
    id: string;
  };
}

const FolderTitle = ({ folder }: FolderTitleState) => {
  const [title, setTitle] = useInputState(folder.title);

  useEffect(() => {
    setTitle(folder.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps --- effect does not depend on setTitle
  }, [folder]);

  return (
    <InputBase
      styles={{
        input: {
          fontWeight: 'bold',
          fontSize: '34px',
        },
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
