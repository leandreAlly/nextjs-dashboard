import '../app/ui/global.css';
import '../app/ui/slick.css';
import { inter } from './ui/font';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | iTrade Dashboard',
    default: 'iTrade Dashboard',
  },
  description: 'All your trades and customers in one place',
  metadataBase: new URL('https://itrade-dashboard.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
