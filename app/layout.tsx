import { Inter } from '@next/font/google';
import Providers from './providers';

type Props = {
  children: React.ReactNode;
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
