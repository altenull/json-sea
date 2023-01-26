import { memo } from 'react';
import { format } from 'timeago.js';
import { useIntervallyForceUpdate } from '../../../utils/react-hooks/useIntervallyForceUpdate';

type Props = {
  unixTimestamp: number; // (ms)
};

const _RelativeTimeFormatter = ({ unixTimestamp }: Props) => {
  useIntervallyForceUpdate(1000);

  return <>{format(unixTimestamp)}</>;
};

export const RelativeTimeFormatter = memo(_RelativeTimeFormatter);
