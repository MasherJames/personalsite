import * as React from 'react';

import '@/styles/globals.scss';
import { redHatMono, agrandir } from '@/styles/fonts';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${agrandir.variable} ${redHatMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
