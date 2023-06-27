'use client';

import { Modal, Row, Switch, Text } from '@nextui-org/react';
import { memo } from 'react';
import { useSettingsStore } from '../../store/settings/settings.store';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const _SettingsModal = ({ isModalOpen, closeModal }: Props) => {
  const [isMinimapOn, toggleMinimap] = useSettingsStore((state) => [state.isMinimapOn, state.toggleMinimap]);

  return (
    <Modal closeButton aria-labelledby="settings-modal-title" open={isModalOpen} onClose={closeModal}>
      <Modal.Header>
        <Text id="settings-modal-title" b size={18}>
          Settings
        </Text>
      </Modal.Header>

      <Modal.Body>
        <Row css={{ gap: '8px', marginBottom: '$12' }} align="center">
          <Switch checked={isMinimapOn} onChange={toggleMinimap} />
          <Text>Minimap</Text>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export const SettingsModal = memo(_SettingsModal);
