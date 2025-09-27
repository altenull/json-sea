'use client';

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import { ComponentProps, memo, useCallback, useEffect } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { Text } from '../../ui/components/Text';
import { formatJsonLikeData, isArray, isNull, isObject, isValidJson } from '../../utils/json.util';
import { useSimpleFetch } from '../../utils/react-hooks/useSimpleFetch';
import { useString } from '../../utils/react-hooks/useString';
import { DragDropJsonFile } from './DragDropJsonFile';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _ImportJsonModal = ({ isModalOpen, closeModal }: Props) => {
  const {
    string: jsonUrlValue,
    isEmpty: isJsonUrlValueEmpty,
    setString: setJsonUrlValue,
    clearString: clearJsonUrlValue,
  } = useString();
  const {
    loading: isGetJsonLoading,
    data: getJsonResponse,
    error: getJsonError,
    fetchUrl: fetchJsonUrl,
    resetError: resetGetJsonError,
  } = useSimpleFetch();

  const setStringifiedJson = useJsonEngineStore((state) => state.setStringifiedJson);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const handleJsonUrlValueChange: ComponentProps<typeof Input>['onChange'] = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setJsonUrlValue(e.target.value);
      resetGetJsonError();
    },
    [setJsonUrlValue, resetGetJsonError],
  );

  const handleJsonUrlValueClear: ComponentProps<typeof Input>['onClear'] = useCallback(() => {
    clearJsonUrlValue();
    resetGetJsonError();
  }, [clearJsonUrlValue, resetGetJsonError]);

  const handleJsonUrlInputKeyDown: ComponentProps<typeof Input>['onKeyDown'] = (e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty) {
      fetchJsonUrl(jsonUrlValue);
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      resetGetJsonError();
      clearJsonUrlValue();
    }
  }, [isModalOpen, resetGetJsonError, clearJsonUrlValue]);

  useEffect(() => {
    if (isObject(getJsonResponse) || isArray(getJsonResponse)) {
      const formattedData: string = formatJsonLikeData(getJsonResponse);

      if (isValidJson(formattedData)) {
        setStringifiedJson(formattedData);
        resetSelectedNode();
        closeModal();
      }
    }
  }, [getJsonResponse, setStringifiedJson, resetSelectedNode, closeModal]);

  const isInvalid = !isNull(getJsonError);

  return (
    <Modal closeButton isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Import JSON via URL or File</ModalHeader>
            <ModalBody className="gap-3">
              <div className="flex gap-x-2">
                <Input
                  aria-label="JSON URL input"
                  classNames={{
                    inputWrapper: ['h-10'],
                  }}
                  size="sm"
                  variant="bordered"
                  isClearable
                  isDisabled={isGetJsonLoading}
                  isInvalid={isInvalid}
                  color={isInvalid ? 'danger' : 'primary'}
                  errorMessage={isInvalid ? 'Fetching JSON via URL failed for some reason' : undefined}
                  value={jsonUrlValue}
                  placeholder="Enter a JSON URL to fetch"
                  onChange={handleJsonUrlValueChange}
                  onClear={handleJsonUrlValueClear}
                  onKeyDown={handleJsonUrlInputKeyDown}
                />
                <Button
                  variant="flat"
                  color="primary"
                  isLoading={isGetJsonLoading}
                  isDisabled={isJsonUrlValueEmpty}
                  onPress={() => fetchJsonUrl(jsonUrlValue)}
                >
                  Fetch
                </Button>
              </div>

              <Text className="text-center text-xs">or</Text>

              <DragDropJsonFile afterFileReadSuccess={closeModal} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export const ImportJsonModal = memo(_ImportJsonModal);
