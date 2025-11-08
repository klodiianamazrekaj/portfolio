"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DevelopmentPage() {
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
                    <h1 className="section-title">Development Stack</h1>
                    <p className="text-gray-400">All of the apps, tools, and services I use to build my projects.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Apps</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Cursor</h3>
                            <p className="text-gray-400">- Cursor is a fork of VSCode with Claude built-in. I find the AI is a lot better than GitHub Copilot. They keep it up to date with the latest versions of VSCode so any extension should work perfectly.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Arc</h3>
                            <p className="text-gray-400">- My browser of choice. I love the sidebar design and having different spaces. It&apos;s built on top of Chromium so any Chrome extension is compatible.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Raycast</h3>
                            <p className="text-gray-400">- So much more than a spotlight replacement. Raycast integrates with a ton of tools and lets you take control of your entire mac from your keyboard. Things like changing output devices and clipboard history are super convenient.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Linear</h3>
                            <p className="text-gray-400">- Primarily a team-based project management tool but it&apos;s still great for personal projects.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Languages/Frameworks</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Next.js</h3>
                            <p className="text-gray-400">- I use Next as the frontend for all of my projects. Its server-side capabilities make it great for SEO and with small apps a separate backend may not be necessary.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">TypeScript</h3>
                            <p className="text-gray-400">- I use TypeScript almost for all of my projects. It&apos;s a great way to catch errors at compile time and improve code readability.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">PostgreSQL</h3>
                            <p className="text-gray-400">- I use PostgreSQL for all of my database needs. It&apos;s a great relational database that is easy to use and scale.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Laravel</h3>
                            <p className="text-gray-400">- I use Laravel for all of my backend APIs. It&apos;s a great framework for building RESTful APIs quickly.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Tailwind CSS</h3>
                            <p className="text-gray-400">- I use Tailwind for all of my frontend styling. It&apos;s a great utility-first framework that makes styling a breeze.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">shadcn/ui</h3>
                            <p className="text-gray-400">- When I need a UI component I don&apos;t want to build myself I go here first. Lots of great ones that are easy to integrate with.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}