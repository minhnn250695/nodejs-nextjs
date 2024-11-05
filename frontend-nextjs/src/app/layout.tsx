import './globals.scss';
import Navbar from '@/components/Navbar';
import BreadcrumbComponent from '@/components/Breadscrumb';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shopee Fake',
  description: 'Choose your favorite products and get it',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <BreadcrumbComponent />
          <div className="container">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}