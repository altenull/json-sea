import { Button, ButtonProps, styled, Tooltip, useTheme } from '@nextui-org/react';
import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { stringifiedJsonAtom } from '../../store/json-engine/json-engine.atom';
import { isValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { Icon } from '../../ui/icon/Icon';
import { downloadAsFile } from '../../utils/file-download.util';
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
        css: {
          minWidth: 'initial',
          width: '100%',
        },
        light: true,
        color: 'primary',
        size: 'sm',
      } as ButtonProps),
    []
  );

  const handleDownloadJsonClick = () => {
    downloadAsFile(`data:text/json;charset=utf8,${encodeURIComponent(stringifiedJson)}`, 'json-sea.json');
  };

  return (
    <>
      {isImportJsonModalOpen && (
        <ImportJsonModal isModalOpen={isImportJsonModalOpen} closeModal={closeImportJsonModal} />
      )}

      <S_Host style={style}>
        <Tooltip content="Import JSON" color="primary">
          <Button
            {...sharedButtonProps}
            icon={<Icon icon="file-plus" size={24} color={theme?.colors.primary.value} />}
            onPress={openImportJsonModal}
          />
        </Tooltip>

        <Tooltip content="Download JSON" color="primary">
          <Button
            {...sharedButtonProps}
            disabled={!isValidJson}
            icon={<Icon icon="download" size={24} color={theme?.colors.primary.value} />}
            onPress={handleDownloadJsonClick}
          />
        </Tooltip>
      </S_Host>
    </>
  );
};

const S_Host = styled('div', {
  height: '44px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$cyan50',
  borderTop: '1px solid $border',

  '*': {
    flex: 1,
  },
});

export const JsonEditorConsole = memo(_JsonEditorConsole);
