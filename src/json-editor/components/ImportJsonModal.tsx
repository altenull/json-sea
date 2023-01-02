'use client';

import { Button, FormElement, Input, Loading, Modal, Row, Text } from '@nextui-org/react';
import { memo, useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { formatJsonLikeData, isObject, isValidJson } from '../../utils/json.util';
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
    // TODO: Handle getJsonError
    error: getJsonError,
    fetchUrl: fetchJsonUrl,
  } = useSimpleFetch();

  const setStringifiedJson = useSetRecoilState(stringifiedJsonAtom);
  const setLatestValidStringifiedJson = useSetRecoilState(latestValidStringifiedJsonAtom);

  const handleJsonUrlValueChange = useCallback(
    (e: React.ChangeEvent<FormElement>) => {
      setJsonUrlValue(e.target.value);
    },
    [setJsonUrlValue]
  );

  const handleJsonUrlInputKeyDown: React.KeyboardEventHandler<FormElement> = (e) => {
    if (e.key === 'Enter' && !isJsonUrlValueEmpty) {
      fetchJsonUrl(jsonUrlValue);
    }
  };

  useEffect(() => {
    // TODO: Handle array data?
    if (isObject(getJsonResponse)) {
      const formattedData: string = formatJsonLikeData(getJsonResponse);

      if (isValidJson(formattedData)) {
        setStringifiedJson(formattedData);
        setLatestValidStringifiedJson(formattedData);
        closeModal();
      }
    }
  }, [getJsonResponse, setStringifiedJson, setLatestValidStringifiedJson, closeModal]);

  return (
    <Modal closeButton aria-labelledby="modal-title" open={isModalOpen} onClose={closeModal}>
      <Modal.Header>
        <Text b size={18}>
          Import JSON via URL or File
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row css={{ gap: '2px' }} align="center">
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Enter a JSON URL to fetch"
            disabled={isGetJsonLoading}
            value={jsonUrlValue}
            onChange={handleJsonUrlValueChange}
            onKeyDown={handleJsonUrlInputKeyDown}
          />
          <Button
            css={{ width: '80px', minWidth: '80px' }}
            flat
            disabled={isJsonUrlValueEmpty}
            onClick={() => fetchJsonUrl(jsonUrlValue)}
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
