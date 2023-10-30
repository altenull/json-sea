import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _MediaViewerBox = ({ children }: Props) => {
  return <div className="rounded-lg bg-default-100 p-2">{children}</div>;
};

export const MediaViewerBox = memo(_MediaViewerBox);
