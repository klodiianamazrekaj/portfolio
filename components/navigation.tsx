"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path ? "active" : ""
    }

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        // Only scroll if we're on the home page
        if (pathname === '/') {
            const contactSection = document.getElementById('contact')
            contactSection?.scrollIntoView({ behavior: 'smooth' })
        } else {
            // If we're not on home page, navigate to home and then scroll
            window.location.href = '/#contact'
        }
    }

    return (
        <div className="w-64">
            <div className="mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
                </div>
                <h1 className="text-xl font-bold whitespace-nowrap">Klodiana Mazrekaj</h1>
                <p className="text-gray-400 whitespace-nowrap">Software Developer</p>
            </div>

            <nav>
                <ul className="space-y-8">
                    <li>
                        <Link href="/" className={`nav-link ${isActive("/")}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link 
                            href="/#contact" 
                            onClick={handleContactClick}
                            className={`nav-link ${isActive("/#contact")}`}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/stack" className={`nav-link ${isActive("/stack")}`}>
                            Stack
                        </Link>
                    </li>
                    <li>
                        <Link href="/vault" className={`nav-link ${isActive("/vault")}`}>
                            Vault
                        </Link>
                    </li>
                    <li>
                        <Link href="/links" className={`nav-link ${isActive("/resume")}`}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
