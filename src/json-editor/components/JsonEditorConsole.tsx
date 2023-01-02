import { Button, ButtonProps, styled, Tooltip, useTheme } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { isValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { Icon } from '../../ui/icon/Icon';
import { downloadAsJsonFile } from '../../utils/json.util';
import { useBoolean } from '../../utils/react-hooks/useBoolean';
import { ImportJsonModal } from './ImportJsonModal';

type Props = {
  style?: React.CSSProperties;
};

const _JsonEditorConsole = ({ style }: Props) => {
  const isValidJson: boolean = useRecoilValue(isValidJsonSelector);
  const stringifiedJson: string = useRecoilValue(stringifiedJsonAtom);

  const { bool: isImportJsonModalOpen, setTrue: openImportJsonModal, setFalse: closeImportJsonModal } = useBoolean();
  const { theme } = useTheme();

  const sharedButtonProps: Partial<ButtonProps> = useMemo(
    () =>
      ({
        light: true,
        color: 'primary',
        size: 'sm',
      } as ButtonProps),
    []
  );

  const handleDownloadJsonClick = () => {
    downloadAsJsonFile(stringifiedJson, 'json-sea.json');
  };

  return (
    <>
      {isImportJsonModalOpen && (
        <ImportJsonModal isModalOpen={isImportJsonModalOpen} closeModal={closeImportJsonModal} />
      )}

      <StyledHost style={style}>
        <Tooltip content="Import JSON" color="primary">
          <Button
            {...sharedButtonProps}
            icon={<Icon icon="file-plus" size={24} color={theme?.colors.primary.value} />}
            onClick={openImportJsonModal}
          />
        </Tooltip>

        <Tooltip content="Download JSON" color="primary">
          <Button
            {...sharedButtonProps}
            disabled={!isValidJson}
            icon={<Icon icon="download" size={24} color={theme?.colors.primary.value} />}
            onClick={handleDownloadJsonClick}
          />
        </Tooltip>
      </StyledHost>
    </>
  );
};

const StyledHost = styled('div', {
  height: '44px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$cyan50',
  borderTop: '1px solid $border',
});

export const JsonEditorConsole = memo(_JsonEditorConsole);
