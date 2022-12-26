import { memo, useEffect, useState } from 'react';
import { format } from 'timeago.js';

type Props = {
  unixTimestamp: number; // (ms)
};

const _RelativeTimeFormatter = ({ unixTimestamp }: Props) => {
  const [, setBoolean] = useState<boolean>(false);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      setBoolean((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{format(unixTimestamp)}</>;
};

export const RelativeTimeFormatter = memo(_RelativeTimeFormatter);
