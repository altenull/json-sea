import { semanticColors } from '@nextui-org/react';
import { memo, useId } from 'react';
import { Text } from '../../ui/components/Text';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';
import { useDragDropJsonFile } from '../hooks/useDragDropJsonFile';

type Props = {
  afterFileReadSuccess: () => void;
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
        className={`${
          isDragging ? 'bg-success-200' : 'bg-gray-50'
        } border-border flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-gray-100`}
        htmlFor={fileInputId}
      >
        <Icon
          icon="cloud-upload"
          size={40}
          color={isDragging ? (semanticColors[theme].success as any).DEFAULT : semanticColors[theme].default[600]}
        />
        <Text className={`text-sm ${isDragging ? 'text-success' : 'text-default-900'}`}>
          {isDragging ? 'Drop it to import' : 'Drop a your JSON file, or click here'}
        </Text>
      </label>
    </div>
  );
};

export const DragDropJsonFile = memo(_DragDropJsonFile);
