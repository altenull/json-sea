'use client';

import { Button, FormElement, Input, Loading, Modal, Row, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect } from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { selectedNodeIdAtom } from '../../store/json-diagram-view/json-diagram-view.atom';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
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

  const setStringifiedJson = useSetRecoilState(stringifiedJsonAtom);
  const setLatestValidStringifiedJson = useSetRecoilState(latestValidStringifiedJsonAtom);
  const resetSelectedNodeId = useResetRecoilState(selectedNodeIdAtom);

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
        setLatestValidStringifiedJson(formattedData);
        resetSelectedNodeId();
        closeModal();
      }
    }
  }, [getJsonResponse, setStringifiedJson, setLatestValidStringifiedJson, resetSelectedNodeId, closeModal]);

  return (
    <Modal closeButton aria-labelledby="import-json-modal-title" open={isModalOpen} onClose={closeModal}>
      <Modal.Header>
        <Text id="import-json-modal-title" b size={18}>
          Import JSON via URL or File
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row css={{ gap: '2px', marginBottom: '$12' }} align="center">
          <Input
            aria-label="JSON URL input"
            clearable
            bordered
            fullWidth
            color={isNull(getJsonError) ? 'primary' : 'error'}
            size="lg"
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

        <DragDropJsonFile afterFileReadSuccess={closeModal} />
      </Modal.Body>
    </Modal>
  );
};

export const ImportJsonModal = memo(_ImportJsonModal);
