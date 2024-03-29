import { useCallback, useEffect, useRef } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { formatJsonLikeData, isValidJson } from '../../utils/json.util';
import { useBoolean } from '../../utils/react-hooks/useBoolean';

export const useDragDropJsonFile = (afterFileReadSuccess: () => void) => {
  const setStringifiedJson = useJsonEngineStore((state) => state.setStringifiedJson);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const { bool: isDragging, setTrue: onIsDragging, setFalse: offIsDragging } = useBoolean();
  const dropzoneRef = useRef<HTMLLabelElement | null>(null);

  const processJsonFileText = useCallback(
    (jsonFileText: string): void => {
      if (isValidJson(jsonFileText)) {
        const formattedJson: string = formatJsonLikeData(jsonFileText);

        setStringifiedJson(formattedJson);
        resetSelectedNode();
        afterFileReadSuccess();
      }
    },
    [setStringifiedJson, resetSelectedNode, afterFileReadSuccess]
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
            processJsonFileText(jsonText);
          });
        }
      }
    },
    [offIsDragging, processJsonFileText]
  );

  const handleFileInputChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.files && e.target.files[0]) {
        const jsonFile: File = e.target.files[0]; // <input> tag has accept="application/JSON" attribute.
        jsonFile.text().then((jsonText: string) => {
          processJsonFileText(jsonText);
        });
      }
    },
    [processJsonFileText]
  );

  useEffect(() => {
    const dropzoneElement: HTMLLabelElement | null = dropzoneRef?.current;

    dropzoneElement?.addEventListener('dragenter', handleDragIn);
    dropzoneElement?.addEventListener('dragleave', handleDragOut);
    dropzoneElement?.addEventListener('dragover', handleDragOver);
    dropzoneElement?.addEventListener('drop', handleDrop);

    return () => {
      dropzoneElement?.removeEventListener('dragenter', handleDragIn);
      dropzoneElement?.removeEventListener('dragleave', handleDragOut);
      dropzoneElement?.removeEventListener('dragover', handleDragOver);
      dropzoneElement?.removeEventListener('drop', handleDrop);
    };
  }, [dropzoneRef, handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  return {
    dropzoneRef,
    isDragging,
    handleFileInputChange,
  };
};
