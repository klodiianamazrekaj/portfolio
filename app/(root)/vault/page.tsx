"use client"
import Navigation from "@/components/navigation"
import ResourceCard from "@/components/resource-card"

export default function VaultPage() {
    const resources = [
        {
            title: "Cursor AI",
            description: "Fast, AI-powered code editor.",
            imageUrl: "/images/cursor.png",
            link: "https://www.cursor.com/",
        },
        {
            title: "v0.dev",
            description: "An AI-powered UI generator.",
            imageUrl: "/images/v0dev.png",
            link: "https://www.v0.dev/",
        },
        {
            title: "Arc Browser",
            description: "Just my favorite browser.",
            imageUrl: "/images/arcbrowser.png",
            link: "https://arc.net/",
        },
        {
            title: "Raycast",
            description: "The best Mac productivity tool.",
            imageUrl: "/images/raycast.png",
            link: "https://www.raycast.com/",
        },
        {
            title: "Resend",
            description: "The Email tool for developers",
            imageUrl: "/images/resend.png",
            link: "https://resend.com/home",
        },
        {
            title: "Dribbble",
            description: "For design inspiration",
            imageUrl: "/images/dribbble.png",
            link: "https://dribbble.com/",
        },
    ]

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16 flex flex-col md:flex-row gap-16 bg-[#0f0c29] min-h-screen">
            <Navigation />

            <div className="flex-1">
                <h2 className="section-title">Vault</h2>
                <p className="section-subtitle mb-8">
                    Links to valuable tools and resources I&apos;ve come across. More added all the time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                        <ResourceCard
                            key={index}
                            title={resource.title}
                            description={resource.description}
                            imageUrl={resource.imageUrl}
                            link={resource.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
