import { styled, Text, useTheme } from '@nextui-org/react';
import { memo, useId } from 'react';
import { Icon } from '../../ui/icon/Icon';
import { useDragDropJsonFile } from '../hooks/useDragDropJsonFile';

type Props = {
  afterFileReadSuccess: () => void;
};

const _DragDropJsonFile = ({ afterFileReadSuccess }: Props) => {
  const fileInputId: string = useId();
  const { theme } = useTheme();
  const { dropzoneRef, isDragging, handleFileInputChange } = useDragDropJsonFile(afterFileReadSuccess);

  return (
    <S_Host>
      <S_FileInput type="file" accept="application/JSON" id={fileInputId} onChange={handleFileInputChange} />

      <S_Label
        ref={dropzoneRef}
        css={{
          backgroundColor: isDragging ? '$successLight' : '$gray50',
        }}
        htmlFor={fileInputId}
      >
        <Icon
          icon="cloud-upload"
          size={40}
          color={isDragging ? theme?.colors.success.value : theme?.colors.accents8.value}
        />
        <Text size="$sm" color={isDragging ? 'success' : 'default'}>
          {isDragging ? 'Drop it to import' : 'Drop a your JSON file, or click here'}
        </Text>
      </S_Label>
    </S_Host>
  );
};

const S_Host = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: '200px',
});

const S_FileInput = styled('input', {
  display: 'none',
});

const S_Label = styled('label', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderRadius: '$lg',
  border: '2px dashed $border',

  '&:hover': {
    backgroundColor: '$gray100',
  },
});

export const DragDropJsonFile = memo(_DragDropJsonFile);
