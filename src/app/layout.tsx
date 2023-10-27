'use client';

import React, {ReactNode} from "react";
import {Inter} from 'next/font/google';
import '../styles/base.scss';
import '../styles/globals.scss';
import {Provider} from "mobx-react";
import {allStore} from "@/stores/AllStore";

const inter = Inter({subsets: ['latin']})

interface RootLayout {
    children: ReactNode;
}

export default function RootLayout({children}: RootLayout) {
    return (
        <html lang="en">
        <body className={inter.className} style={{background: 'white'}}>
        <Provider {...allStore}>
            {children}
        </Provider>
        </body>
        </html>
    );
}
