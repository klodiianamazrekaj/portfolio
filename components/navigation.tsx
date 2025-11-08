"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navigation() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path ? "active" : ""
    }

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (pathname === '/') {
            const contactSection = document.getElementById('contact')
            contactSection?.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = '/#contact'
        }
        setIsMenuOpen(false)
    }

    return (
        <>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-[#151134] hover:bg-[#1a1642] transition-colors"
                aria-label="Toggle menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            <div className={`fixed md:relative w-64 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            } md:block bg-[#0f0c29] md:bg-transparent h-full z-40 p-6 md:p-0`}>
                <div className="mb-8">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
                    </div>
                    <h1 className="text-xl font-bold whitespace-nowrap">Klodiana Mazrekaj</h1>
                    <p className="text-gray-400 whitespace-nowrap">Full-Stack Developer</p>
                </div>

                <nav>
                    <ul className="space-y-8">
                        <li>
                            <Link 
                                href="/" 
                                className={`nav-link ${isActive("/")}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
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
                            <Link 
                                href="/stack" 
                                className={`nav-link ${isActive("/stack")}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Stack
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/vault" 
                                className={`nav-link ${isActive("/vault")}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Vault
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/KlodianaMazrekaj_Resume.pdf" 
                                className={`nav-link ${isActive("/resume")}`}
                                onClick={() => setIsMenuOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"   
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
