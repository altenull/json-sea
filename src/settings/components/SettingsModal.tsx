'use client';

import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { Switch } from '@nextui-org/switch';
import { memo } from 'react';
import { useSettingsStore } from '../../store/settings/settings.store';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _SettingsModal = ({ isModalOpen, closeModal }: Props) => {
  const [isMinimapOn, isNodePathOn, toggleMinimap, toggleNodePath] = useSettingsStore((state) => [
    state.isMinimapOn,
    state.isNodePathOn,
    state.toggleMinimap,
    state.toggleNodePath,
  ]);

  return (
    <Modal closeButton size="sm" isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Settings</ModalHeader>
            <ModalBody>
              <Switch isSelected={isMinimapOn} onChange={toggleMinimap}>
                Minimap
              </Switch>
              <Switch isSelected={isNodePathOn} onChange={toggleNodePath}>
                Node Path
              </Switch>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export const SettingsModal = memo(_SettingsModal);
