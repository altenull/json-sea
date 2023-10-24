import { memo } from 'react';

type Props = {
  children: React.ReactNode;
};

const _MediaViewerBox = ({ children }: Props) => {
  return <div className="rounded-sm bg-gray-50 p-4">{children}</div>;
};

export const MediaViewerBox = memo(_MediaViewerBox);
