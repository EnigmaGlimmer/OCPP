import React from "react";

interface LayoutProps {
    children?: React.ReactNode;
    title?: string;
    desc?: string;
    showNav?: boolean;
    showFooter?: boolean;
}

export default function GlobalLayout({children}: LayoutProps) {
    return (
        <>
            {children}
        </>
    );
} 