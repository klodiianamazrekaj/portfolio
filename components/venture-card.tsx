import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface VentureCardProps {
    title: string
    description: string
    url: string
}

export default function VentureCard({ title, description, url }: VentureCardProps) {
    return (
        <div className="group mb-6">
            <Link href={url} className="font-medium text-xl mb-1 group-hover:text-[#a29ddb]">
                {title} <ArrowUpRight className="inline ml-1" size={18} />
            </Link>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}
