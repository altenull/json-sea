import { useDisclosure } from '@nextui-org/modal';
import { semanticColors } from '@nextui-org/react';
import { memo } from 'react';
import { SettingsModal } from '../../settings/components/SettingsModal';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';
import { useCustomTheme } from '../../utils/react-hooks/useCustomTheme';

const _SettingsButton = () => {
  const { theme } = useCustomTheme();
  const { isOpen: isSettingsModalOpen, onOpen: openSettingsModal, onClose: closeSettingsModal } = useDisclosure();

  return (
    <>
      <SettingsModal isModalOpen={isSettingsModalOpen} closeModal={closeSettingsModal} />

      <CircleTransparentButton onClick={openSettingsModal}>
        <Icon icon="settings" size={24} color={semanticColors[theme].default[500]} />
      </CircleTransparentButton>
    </>
  );
};

export const SettingsButton = memo(_SettingsButton);
