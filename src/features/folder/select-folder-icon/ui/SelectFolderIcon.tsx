import { useEditFolderMutation, useFolderByIdQuery } from '@/entities/folder';
import { EmojiPicker } from '@/shared/ui/EmojiPicker';
import { useRouter } from 'next/router';

interface SelectFolderIconProps {
  id: string;
}

const SelectFolderIcon = ({ id }: SelectFolderIconProps) => {
  const { data, isSuccess, isError, isLoading } = useFolderByIdQuery(id);
  const [edit] = useEditFolderMutation();

  if (isError) return null;
  if (isLoading) return null;
  return (
    <EmojiPicker
      actionIconProps={{
        loading: isLoading,
      }}
      emoji={data?.emoji}
      onSelect={(emoji) => isSuccess && edit({ ...data, emoji })}
    />
  );
};

export { SelectFolderIcon };
