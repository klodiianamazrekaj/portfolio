import Image from "next/image"
import Link from "next/link"

interface ResourceCardProps {
    title: string
    description: string
    imageUrl: string
    link: string
}

export default function ResourceCard({ title, description, imageUrl, link }: ResourceCardProps) {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-[#0f0c29] rounded-2xl overflow-hidden hover:bg-[#151134] transition-all p-6 border border-[#1a1642]">
                <div className="relative h-52 w-full mb-6 rounded-xl overflow-hidden">
                    <Image 
                        src={imageUrl || "/placeholder.svg"} 
                        alt={title} 
                        fill 
                        className="object-cover"
                    />
                </div>
                <h3 className="text-2xl font-medium mb-2">{title}</h3>
                <p className="text-gray-400 text-lg">{description}</p>
            </div>
        </Link>
    )
}
