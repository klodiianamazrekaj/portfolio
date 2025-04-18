"use client"

import { useEffect, useState } from "react"

export default function CursorHighlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        window.addEventListener("mousemove", handleMouseMove)
        document.body.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            document.body.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [isVisible])

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:block hidden"
            style={{
                background: isVisible
                    ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(48, 43, 99, 0.2), transparent 80%)`
                    : "transparent",
            }}
        />
    )
}
