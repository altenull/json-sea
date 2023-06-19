import { styled, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { isValidJsonSelector } from '../../store/json-engine/json-engine.selector';
import { Icon } from '../../ui/icon/Icon';

type Props = {
  style?: React.CSSProperties;
};

const _JsonValidityStatus = ({ style }: Props) => {
  const isValidJson: boolean = useRecoilValue(isValidJsonSelector);
  const { theme } = useTheme();

  return (
    <S_Host style={style}>
      <Icon
        icon={isValidJson ? 'file-check' : 'file-block'}
        size={24}
        color={isValidJson ? theme?.colors.success.value : theme?.colors.error.value}
      />
    </S_Host>
  );
};

const S_Host = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$4',
  backgroundColor: '$backgroundAlpha',
});

export const JsonValidityStatus = memo(_JsonValidityStatus);
