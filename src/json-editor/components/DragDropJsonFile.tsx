import { styled, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect, useId, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { isValidJson } from '../../utils/json.util';
import { useBoolean } from '../../utils/react-hooks/useBoolean';

type Props = {
  successCallback: () => void;
};

// TODO: Styling
const _DragDropJsonFile = ({ successCallback }: Props) => {
  const setStringifiedJson = useSetRecoilState(stringifiedJsonAtom);
  const setLatestValidStringifiedJson = useSetRecoilState(latestValidStringifiedJsonAtom);

  const { bool: isDragging, setTrue: onIsDragging, setFalse: offIsDragging } = useBoolean();
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const fileInputId = useId();

  const updateJsonStore = useCallback(
    (jsonFileText: string) => {
      if (isValidJson(jsonFileText)) {
        const stringifiedJson: string = JSON.stringify(JSON.parse(jsonFileText), null, 2);

        setStringifiedJson(stringifiedJson);
        setLatestValidStringifiedJson(stringifiedJson);
        successCallback();
      }
    },
    [setStringifiedJson, setLatestValidStringifiedJson, successCallback]
  );

  const handleDragIn = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onIsDragging();
    },
    [onIsDragging]
  );

  const handleDragOut = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      offIsDragging();
    },
    [offIsDragging]
  );

  const handleDragOver = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onIsDragging();
    },
    [onIsDragging]
  );

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      offIsDragging();

      if (e.dataTransfer?.files && e.dataTransfer?.files[0]) {
        const file: File = e.dataTransfer.files[0];

        if (file.type === 'application/json') {
          file.text().then((jsonText: string) => {
            updateJsonStore(jsonText);
          });
        }
      }
    },
    [offIsDragging, updateJsonStore]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.files && e.target.files[0]) {
        const jsonFile: File = e.target.files[0]; // <input> tag has accept="application/JSON" attribute.
        jsonFile.text().then((jsonText: string) => {
          updateJsonStore(jsonText);
        });
      }
    },
    [updateJsonStore]
  );

  useEffect(() => {
    if (!!dragRef?.current) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }

    return () => {
      if (!!dragRef?.current) {
        dragRef.current.removeEventListener('dragenter', handleDragIn);
        dragRef.current.removeEventListener('dragleave', handleDragOut);
        dragRef.current.removeEventListener('dragover', handleDragOver);
        dragRef.current.removeEventListener('drop', handleDrop);
      }
    };
  }, [dragRef, handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  return (
    <StyledHost>
      <StyledFileInput type="file" accept="application/JSON" id={fileInputId} onChange={handleChange} />

      <StyledLabel ref={dragRef} htmlFor={fileInputId}>
        <Text>{isDragging ? '(Dragging!)' : ''}Drop a your JSON file, or click here</Text>
      </StyledLabel>
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: '160px',
  backgroundColor: '$gray100',
});

const StyledFileInput = styled('input', {
  display: 'none',
});

const StyledLabel = styled('label', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderWidth: '2px',
  borderRadius: '1rem',
  borderStyle: 'dashed',
  borderColor: '#cbd5e1',
  backgroundColor: '#f8fafc',
});

export const DragDropJsonFile = memo(_DragDropJsonFile);
