import { styled, Text, useTheme } from '@nextui-org/react';
import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { validateJsonDataType } from '../../store/json-engine/helpers/json-data-type.helper';
import { sizes } from '../../ui/constants/sizes.constant';
import { encloseDoubleQuote } from '../../utils/string.util';

type Props = {
  propertyK: string;
  propertyV: any;
  hasChildNode: boolean;
};

const _ObjectNodeProperty = ({ propertyK, propertyV, hasChildNode }: Props) => {
  const { theme } = useTheme();

  const { isPrimitiveData } = validateJsonDataType(propertyV);

  return (
    <StyledHost>
      <Text color="primary" css={{ marginRight: '$8' }}>
        {encloseDoubleQuote(propertyK)}
      </Text>

      {isPrimitiveData && (
        <Text
          css={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {JSON.stringify(propertyV)}
        </Text>
      )}

      {hasChildNode && (
        <Handle
          style={{ backgroundColor: theme?.colors.gray400.value }}
          id={propertyK}
          type="source"
          position={Position.Right}
        />
      )}
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  position: 'relative',
  height: sizes.nodeContentHeight,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '$2',

  '& + &': {
    borderTop: '1px solid $gray400',
  },
});

export const ObjectNodeProperty = memo(_ObjectNodeProperty);
