import Link from "next/link"
import VentureCard from "@/components/venture-card"
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
        </section>

        <section className="mb-28">
          <p className="section-subtitle text-gray-400">I’m Klodiana - you can call me <span className="text-white">Klodi</span>, a software developer building tools with meaning. I currently escaped tutoriall hell and I believe in learning through doing, whether it’s coding, writing, or launching ventures. When I’m not deep in the stack, you’ll find me exploring how automation and no-code can make life (and work) a little lighter.</p>
        </section>

        <section className="mb-28">
          <h2 className="section-title">Ventures</h2>
          <p className="section-subtitle text-gray-400">Businesses I&apos;m actively working on</p>

          <div className="mt-12 space-y-8">
            <VentureCard title="Bon Pazar" description="Ku çdo gjë gjen vendin e vet. Blej. Shit. Bon Pazar." url="https://bonpazar.vercel.app" />
          </div>

          <div className="mt-12 space-y-8">
            <VentureCard title="Taverna Hyjnesha" description="Në zemër të Prishtinës por larg zhurmës, Hyjnesha t'pret." url="https://tavernahyjnesha.com" />
          </div>
        </section>

        <section>
          <h2 className="section-title" id="contact">Connect</h2>
          <p className="text-gray-400">
            Reach me at <span className="text-white">klodianamazrekaj20@gmail.com</span> or connect on social media below.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="https://www.linkedin.com/in/klodiana-mazrekaj" className="p-2 bg-[#302b63] border border-[#302b63] rounded-lg hover:bg-[#3d3678] transition-colors">
              <Image src="/images/linkedin.svg" alt="Linkedin" width={28} height={28} />
            </Link>
            <Link href="https://github.com/klodiianamazrekaj" className="p-2 bg-[#302b63] border border-[#302b63] rounded-lg hover:bg-[#3d3678] transition-colors">
              <Image src="/images/github.svg" alt="Github" width={28} height={28} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
