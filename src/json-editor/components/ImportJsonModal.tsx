'use client';

import { Button, FormElement, Input, Loading, Modal, Row, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect } from 'react';
import { useJsonDiagramViewStore } from '../../store/json-diagram-view/json-diagram-view.store';
import { useJsonEngineStore } from '../../store/json-engine/json-engine.store';
import { formatJsonLikeData, isArray, isNull, isObject, isValidJson } from '../../utils/json.util';
import { useSimpleFetch } from '../../utils/react-hooks/useSimpleFetch';
import { useString } from '../../utils/react-hooks/useString';
import { DragDropJsonFile } from './DragDropJsonFile';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _ImportJsonModal = ({ isModalOpen, closeModal }: Props) => {
  const { string: jsonUrlValue, isEmpty: isJsonUrlValueEmpty, setString: setJsonUrlValue } = useString();
  const {
    loading: isGetJsonLoading,
    data: getJsonResponse,
    error: getJsonError,
    fetchUrl: fetchJsonUrl,
    resetError: resetGetJsonError,
  } = useSimpleFetch();

  const setStringifiedJson = useJsonEngineStore((state) => state.setStringifiedJson);
  const resetSelectedNode = useJsonDiagramViewStore((state) => state.resetSelectedNode);

  const handleJsonUrlValueChange = useCallback(
    (e: React.ChangeEvent<FormElement>) => {
      setJsonUrlValue(e.target.value);
      resetGetJsonError();
    },
    [setJsonUrlValue, resetGetJsonError]
  );

  const handleJsonUrlInputKeyDown: React.KeyboardEventHandler<FormElement> = (e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty) {
      fetchJsonUrl(jsonUrlValue);
    }
  };

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

  return (
    <Modal closeButton aria-labelledby="import-json-modal-title" open={isModalOpen} onClose={closeModal}>
      <Modal.Header>
        <Text id="import-json-modal-title" b size={18}>
          Import JSON via URL or File
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row css={{ gap: '8px', marginBottom: '$6' }}>
          <Input
            aria-label="JSON URL input"
            clearable
            bordered
            fullWidth
            color={isNull(getJsonError) ? 'primary' : 'error'}
            size="md"
            placeholder="Enter a JSON URL to fetch"
            helperColor="error"
            helperText={isNull(getJsonError) ? undefined : 'Fetching JSON via URL failed for some reason'}
            disabled={isGetJsonLoading}
            value={jsonUrlValue}
            onChange={handleJsonUrlValueChange}
            onKeyDown={handleJsonUrlInputKeyDown}
          />
          <Button
            css={{ width: '80px', minWidth: '80px' }}
            flat
            disabled={isJsonUrlValueEmpty}
            onPress={() => fetchJsonUrl(jsonUrlValue)}
          >
            {isGetJsonLoading ? <Loading color="currentColor" size="sm" /> : 'Fetch'}
          </Button>
        </Row>

        <Text css={{ textAlign: 'center', marginBottom: '$6' }} size={14}>
          or
        </Text>

        <DragDropJsonFile afterFileReadSuccess={closeModal} />
      </Modal.Body>
    </Modal>
  );
};

export const ImportJsonModal = memo(_ImportJsonModal);
