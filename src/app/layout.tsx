'use client';

import React, {ReactNode} from "react";
import '../styles/base.scss';
import '../styles/globals.scss';
import {Provider} from "mobx-react";
import {allStore} from "@/stores/AllStore";
import StyledComponentsRegistry from "@/lib/antd-registry";


interface RootLayout {
    children: ReactNode;
}

export default function RootLayout({children}: RootLayout) {
    return (
        <html lang="en">
        <body style={{background: 'white'}}>
        <Provider {...allStore}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
        </body>
        </html>
    );
}
