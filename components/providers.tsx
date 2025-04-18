"use client"

import { ReactNode } from "react"
import CursorHighlight from "@/components/cursor-highlight"

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <>
            <CursorHighlight />
            {children}
        </>
    )
} 