import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextJS - FS MERN stuff',
  description: 'We build cool shit!!!',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
