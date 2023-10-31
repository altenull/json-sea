import { semanticColors } from '@nextui-org/react';
import { memo, useId } from 'react';
import { Text } from '../../ui/components/Text';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { useDragDropJsonFile } from '../hooks/useDragDropJsonFile';

type Props = {
  afterFileReadSuccess: () => void;
};

const dropzoneClassName = {
  normal: 'json-dropzone-base bg-default-50',
  dragging: 'json-dropzone-base bg-success-200',
};

const _DragDropJsonFile = ({ afterFileReadSuccess }: Props) => {
  const fileInputId: string = useId();
  const { theme } = useCustomTheme();
  const { dropzoneRef, isDragging, handleFileInputChange } = useDragDropJsonFile(afterFileReadSuccess);

  return (
    <div className="relative h-[200px] w-full max-w-full">
      <input
        className="hidden"
        type="file"
        accept="application/JSON"
        id={fileInputId}
        onChange={handleFileInputChange}
      />

      <label
        ref={dropzoneRef}
        className={isDragging ? dropzoneClassName.dragging : dropzoneClassName.normal}
        htmlFor={fileInputId}
      >
        <Icon
          icon="cloud-upload"
          size={40}
          color={isDragging ? (semanticColors[theme].success as any).DEFAULT : semanticColors[theme].default[500]}
        />
        <Text className={isDragging ? 'text-sm text-success' : 'text-sm text-default-800'}>
          {isDragging ? 'Drop it to import' : 'Drop a your JSON file, or click here'}
        </Text>
      </label>
    </div>
  );
};

export const DragDropJsonFile = memo(_DragDropJsonFile);
