import { memo } from 'react';
import { styled } from '../../../stitches.config';

type Props = {
  propertyK: string;
  propertyV: any;
};

const _PropertyInspector = ({ propertyK, propertyV }: Props) => {
  return (
    <StyledHost>
      <span>{propertyK} :</span>

      <span>{JSON.stringify(propertyV)}</span>
    </StyledHost>
  );
};

const StyledHost = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid gray',
  fontSize: '13px',
});

export const PropertyInspector = memo(_PropertyInspector);
