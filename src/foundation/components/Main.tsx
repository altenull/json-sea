type Props = {
  children: React.ReactNode;
};

const _Main = ({ children }: Props) => {
  // 3.375rem is height of `<GlobalNav>`
  return <main className="flex h-[calc(100vh-3.375rem)] justify-between">{children}</main>;
};

export const Main = _Main;
