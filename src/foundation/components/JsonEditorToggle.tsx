import { useTheme } from '@nextui-org/react';
import { useJsonEditorView } from '../../store/json-editor-view/hooks/useJsonEditorView';
import { CircleTransparentButton } from '../../ui/components/CircleTransparentButton';
import { Icon } from '../../ui/icon/Icon';

const _JsonEditorToggle = () => {
  const { isJsonEditorVisible, toggleJsonEditor } = useJsonEditorView();
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
