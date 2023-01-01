import { Button, styled } from '@nextui-org/react';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { isValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { downloadAsJsonFile } from '../../utils/json.util';
import { useBoolean } from '../../utils/react-hooks/useBoolean';
import { ImportJsonModal } from './ImportJsonModal';

const _JsonEditorConsole = () => {
  const isValidJson: boolean = useRecoilValue(isValidJsonSelector);
  const stringifiedJson: string = useRecoilValue(stringifiedJsonAtom);

  const { bool: isImportJsonModalOpen, setTrue: openImportJsonModal, setFalse: closeImportJsonModal } = useBoolean();

  const handleDownloadJsonClick = () => {
    downloadAsJsonFile(stringifiedJson, 'json-sea.json');
  };

  return (
    <>
      <ImportJsonModal isModalOpen={isImportJsonModalOpen} closeModal={closeImportJsonModal} />

      <StyledHost>
        {/* TODO: Button UI */}
        <Button flat size="sm" onClick={openImportJsonModal}>
          Import JSON
        </Button>
        <Button size="sm" disabled={!isValidJson} onClick={handleDownloadJsonClick}>
          Download JSON
        </Button>
      </StyledHost>
    </>
  );
};

const StyledHost = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$background',
  borderTop: '1px solid $border',
});

export const JsonEditorConsole = memo(_JsonEditorConsole);
