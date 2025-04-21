import Navigation from "@/components/navigation"
import Link from "next/link"

export default function StackPage() {
    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16 flex flex-col md:flex-row gap-16">
            <Navigation />

            <div className="space-y-16">
                <section>
                    <h1 className="text-4xl font-bold mb-4">Stack</h1>
                    <p className="text-xl text-gray-400">Tools & products I use daily.</p>
                </section>

                <section className="group hover:bg-[#151134] -mx-4 px-4 py-2 rounded-lg transition-colors">
                    <Link href="/stack/setup">
                        <h2 className="text-2xl font-medium mb-2">Desk Setup</h2>
                        <p className="text-gray-400 mb-8">My main workspace.</p>
                    </Link>
                </section>

                <section className="group hover:bg-[#151134] -mx-4 px-4 py-2 rounded-lg transition-colors">
                    <Link href="/stack/development">
                        <h2 className="text-2xl font-medium mb-2">Development Stack</h2>
                        <p className="text-gray-400 mb-8">All of the apps, tools, and services I use to build my projects.</p>
                    </Link>
                </section>

                <section className="group hover:bg-[#151134] -mx-4 px-4 py-2 rounded-lg transition-colors">
                    <Link href="/stack/cursor">
                        <h2 className="text-2xl font-medium mb-2">VSCode/Cursor Setup</h2>
                        <p className="text-gray-400 mb-8">The extensions, theme, and settings I use.</p>
                    </Link>
                </section>
            </div>
        </div>
    )
}
