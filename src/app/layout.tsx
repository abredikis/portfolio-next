import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alberts Bredikis - Frontend Developer',
  description:
    'a results-driven web developer with 4 years of success crafting clean, reusable code to enhance page speed, elevate user experience and improve SEO performance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-primary-50',
          dm_sans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
