import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adugbo - Create Better Together',
  description: 'A new home for creators to connect, collaborate, and grow.',
  keywords: 'creators, collaboration, content creation, community',
  authors: [{ name: 'Adugbo Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Adugbo - Create Better Together',
    description: 'A new home for creators to connect, collaborate, and grow.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adugbo - Create Better Together',
    description: 'A new home for creators to connect, collaborate, and grow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
