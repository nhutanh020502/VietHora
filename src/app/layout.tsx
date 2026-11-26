import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VIEHORA TRAVEL | Beyond Every Horizon — Tour Du Lịch & Visa Trọn Gói',
  description:
    'VIEHORA TRAVEL - Beyond Every Horizon. Khám phá Việt Nam và thế giới qua những hành trình an toàn, gần gũi và bền vững.',
  icons: {
    icon: '/assets/img/viehora-mark.svg',
    apple: '/assets/img/viehora-mark.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <div id="page" className="site-main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
