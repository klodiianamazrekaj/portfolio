import Link from "next/link"
import VentureCard from "@/components/venture-card"
import NewsletterSignup from "@/components/newsletter-signup"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16 flex flex-col md:flex-row gap-16">
      <Navigation />

      <div className="space-y-16">
        <section>
          <h2 className="section-title">About</h2>
          <p className="text-lg mb-4">
            Building the future of tech stack decision-making at <span className="font-medium cursor-pointer">Super Stack</span>.
          </p>
          <p className="text-gray-300">
            I enjoy sharing my experiences <span className="font-medium">through writing.</span>
          </p>
        </section>

        <section className="mb-28">
          <h2 className="section-title">The Letter</h2>
          <p className="text-gray-300">
            Documenting the process of <span className="font-medium">building my business</span>. Sharing lessons I
            learn and interesting resources I find.
          </p>

          <div className="mt-8">
            <NewsletterSignup />
          </div>
        </section>

        <section className="mb-28">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle text-gray-400">I’m Klodiana (or Klodi), a software developer building AI-powered tools to simplify tech decisions at Super Stack. I currently escaped tutoriall hell and I believe in learning through doing, whether it’s coding, writing, or launching ventures. My newsletter, The Letter, documents the messy, rewarding journey of turning ideas into reality—lessons, resources, and all. When I’m not deep in the stack, you’ll find me exploring how automation and no-code can make life (and work) a little lighter.</p>
        </section>

        <section className="mb-28">
          <h2 className="section-title">Ventures</h2>
          <p className="section-subtitle text-gray-400">Businesses I&apos;m actively working on</p>

          <div className="mt-12 space-y-8">
            <VentureCard title="Super Stack" description="Your AI tech stack decision-making." url="#" />
          </div>
        </section>

        <section>
          <h2 className="section-title" id="contact">Connect</h2>
          <p className="text-gray-400">
            Reach me at <span className="text-white">klodianamazrekaj20@gmail.com</span> or connect on social media below.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="https://www.linkedin.com/in/klodiana-mazrekaj" className="p-2 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-colors">
              <Image src="/images/linkedin.svg" alt="Linkedin" width={24} height={24} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
