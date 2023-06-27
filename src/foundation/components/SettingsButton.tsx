import { useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { SettingsModal } from '../../settings/components/SettingsModal';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useBoolean } from '../../utils/react-hooks/useBoolean';

const _SettingsButton = () => {
  const { theme } = useTheme();
  const { bool: isSettingsModalOpen, setTrue: openSettingsModal, setFalse: closeSettingsModal } = useBoolean();

  return (
    <>
      {isSettingsModalOpen && <SettingsModal isModalOpen={isSettingsModalOpen} closeModal={closeSettingsModal} />}

      <CircleTransparentButton onClick={openSettingsModal}>
        <Icon icon="settings" size={24} color={theme?.colors.accents8.value} />
      </CircleTransparentButton>
    </>
  );
};

export const SettingsButton = memo(_SettingsButton);
