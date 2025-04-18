"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Submitted email:", email)
        setEmail("")
        // You would typically send this to your newsletter service
    }

    return (
        <div className="bg-[#1a1642] rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row p-1">
                <Input
                    type="email"
                    placeholder="peter.parker@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#0f0c29] border-[#302b63]/30 text-white placeholder:text-gray-400 flex-1 rounded-lg sm:rounded-r-none"
                />
                <Button type="submit" className="bg-[#302b63] hover:bg-[#3d3678] text-white sm:rounded-l-none rounded-lg mt-2 sm:mt-0">
                    Join For Free
                </Button>
            </form>
        </div>
    )
}
