"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SetupPage() {
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16">
            <button
                onClick={() => router.back()}
                className="flex items-center text-gray-400 hover:text-white transition-colors mb-16 cursor-pointer"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
            </button>

            <div className="space-y-16">
                <section>
                    <h1 className="section-title">Desk Setup</h1>
                    <p className="text-gray-400">My main workspace.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Desk</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Macbook Air 15-inch, M2, 2023</h3>
                            <p className="text-gray-400">- Apple M2 Chip, 8GB RAM, 512GB SSD</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Xiaomi Monitor</h3>
                            <p className="text-gray-400">- by Soltech</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Luna Work Table</h3>
                            <p className="text-gray-400">- by Foleja Home</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Mousepad SUBBLIM WORLD XL SUB-MP-01PUW01</h3>
                            <p className="text-gray-400">- by Foleja</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Audio</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Wired SteelSeries Arctis 7</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
