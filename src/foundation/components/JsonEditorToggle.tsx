import { useTheme } from '@nextui-org/react';
import { useJsonEditorViewStore } from '../../store/json-editor-view/json-editor-view.store';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';

const _JsonEditorToggle = () => {
  const [isJsonEditorVisible, toggleJsonEditor] = useJsonEditorViewStore((state) => [
    state.isJsonEditorVisible,
    state.toggleJsonEditor,
  ]);

  const { theme } = useTheme();

  return (
    <CircleTransparentButton onClick={toggleJsonEditor}>
      <Icon
        icon={isJsonEditorVisible ? 'left-arrow-with-bar' : 'right-arrow-with-bar'}
        size={24}
        color={theme?.colors.accents8.value}
      />
    </CircleTransparentButton>
  );
};

export const JsonEditorToggle = _JsonEditorToggle;
