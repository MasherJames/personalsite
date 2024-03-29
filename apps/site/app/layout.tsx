import * as React from 'react';
import { Red_Hat_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import 'global.scss';
import 'styles/index.scss';

const redHatMono = Red_Hat_Mono({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-red-hat-mono',
    subsets: ['latin'],
});

const agrandir = localFont({
    src: [
        {
            path: '../node_modules/assets/fonts/Agrandir-Medium.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../node_modules/assets/fonts/Agrandir-WideMedium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../node_modules/assets/fonts/Agrandir-WideBold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-agrandir',
});

export const metadata = {
    title: 'James Macharia',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${agrandir.variable} ${redHatMono.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
