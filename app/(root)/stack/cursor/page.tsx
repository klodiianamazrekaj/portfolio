"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CursorPage() {
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
                    <h1 className="section-title">VSCode/Cursor Setup</h1>
                    <p className="text-gray-400">The extensions, theme, and settings I use.</p>
                    <p className="text-gray-400 mt-8">Note: I may earn a commission from some links (thank you for supporting me).</p>
                </section>

                <section>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Cursor</h3>
                            <p className="text-gray-400">- I just started using Cursor, which is a fork of VSCode (all extensions still work) with Claude built-in. So far I&apos;m finding it a lot more useful than Copilot.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Theme</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">&quot;Catppuccin for VSCode&quot; theme</h3>
                            <p className="text-gray-400">- Simple and clean.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Material Product Icons</h3>
                            <p className="text-gray-400">- I like them better than the default ones.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-medium mb-8">Extensions</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium">Auto Rename Tag</h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Better Comments</h3>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Dotenv</h3>
                            <p className="text-gray-400">- This extension keeps your env files synced across machines.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Postman</h3>
                            <p className="text-gray-400">- Test APIs without leaving the editor.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Draw.io</h3>
                            <p className="text-gray-400">- Great for creating diagrams within VSCode.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Figma</h3>
                            <p className="text-gray-400">- View any figma file within VSCode. You can even copy the code if you have a pro subscription.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">GitLens</h3>
                            <p className="text-gray-400">- Makes it easy to see who made changes throughout a file. I still like having it for solo projects.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium">Project Manager</h3>
                            <p className="text-gray-400">- Quickly jump between projects.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
