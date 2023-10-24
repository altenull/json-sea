import { sizes } from '../../ui/constants/sizes.constant';

type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  return <main className={`flex justify-between h-[calc(100vh-${sizes.globalNavHeight}px)]`}>{children}</main>;
};

export const Main = _Main;
