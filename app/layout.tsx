// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Changed from Inter to Poppins
import { ThemeProviders } from './providers/ThemeProviders';
import './globals.css'; // if you have global styles

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}