'use client';

import { Button, FormElement, Input, Modal, Row, Text } from '@nextui-org/react';
import { memo, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { latestValidStringifiedJsonAtom, stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { isObject, isValidJson } from '../../utils/json.util';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _ImportJsonModal = ({ isModalOpen, closeModal }: Props) => {
  const [jsonUrlValue, setJsonUrlValue] = useState<string>('');

  const setStringifiedJson = useSetRecoilState(stringifiedJsonAtom);
  const setLatestValidStringifiedJson = useSetRecoilState(latestValidStringifiedJsonAtom);

  const handleJsonUrlValueChange = useCallback((e: React.ChangeEvent<FormElement>) => {
    setJsonUrlValue(e.target.value);
  }, []);

  const handleJsonUrlInputKeyDown: React.KeyboardEventHandler<FormElement> = (e: React.KeyboardEvent<FormElement>) => {
    if (e.key === 'Enter' && jsonUrlValue.length > 0) {
      fetchJsonUrl();
    }
  };

  const fetchJsonUrl = () => {
    fetch(jsonUrlValue)
      .then((response) => response.json())
      .then((data) => {
        // TODO: Handle array data?
        if (isObject(data)) {
          const stringifiedObj: string = JSON.stringify(data, null, 2);

          if (isValidJson(stringifiedObj)) {
            setStringifiedJson(stringifiedObj);
            setLatestValidStringifiedJson(stringifiedObj);
            closeModal();
          }
        }
      });
  };

  // TODO: Styling
  return (
    <Modal closeButton aria-labelledby="modal-title" open={isModalOpen} onClose={closeModal}>
      <Modal.Header>
        <Text b size={18}>
          Import JSON via URL or File
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Enter a JSON URL to fetch"
            value={jsonUrlValue}
            onChange={handleJsonUrlValueChange}
            onKeyDown={handleJsonUrlInputKeyDown}
          />
          <Button auto flat disabled={jsonUrlValue.length < 1} onClick={fetchJsonUrl}>
            Fetch
          </Button>
        </Row>

        {/* TODO: File input with drag&drop */}
        <div style={{ width: '100%', height: '120px', backgroundColor: '#999999' }}>File Drop zone</div>
      </Modal.Body>
    </Modal>
  );
};

export const ImportJsonModal = memo(_ImportJsonModal);
