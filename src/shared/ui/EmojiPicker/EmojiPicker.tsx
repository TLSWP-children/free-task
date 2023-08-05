import {
  ActionIcon,
  Button,
  Menu,
  ScrollArea,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { emojis } from '../../model';
import { memo, useEffect, useState } from 'react';

interface EmojiPickerProps {
  emoji?: string;
  initialEmoji: string;
  onSelect?: (emoji: string) => void;
}

const EmojiPicker = ({ emoji, initialEmoji, onSelect }: EmojiPickerProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState(initialEmoji);
  const selectHandler = (newEmoji: string) => {
    setSelectedEmoji(newEmoji);
    if (onSelect) onSelect(newEmoji);
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon size="xl">
          <Text size="34px">{emoji || selectedEmoji}</Text>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>emojis</Menu.Label>
        <ScrollArea h={200}>
          <SimpleGrid spacing="xs" verticalSpacing="xs" px="xs" cols={5}>
            {emojis.map((emojisItem) => (
              <ActionIcon
                onClick={() => selectHandler(emojisItem)}
                key={emojisItem}
              >
                {emojisItem}
              </ActionIcon>
            ))}
          </SimpleGrid>
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
};

export default memo(EmojiPicker);
