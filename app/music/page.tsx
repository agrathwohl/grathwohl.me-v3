import Link from "next/link"
import { ArrowLeft, ExternalLink, Play, Music, Code, Zap, Cpu } from "lucide-react"
import Header from "@/components/header"

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">Music</h1>
          <p className="text-white/70 mt-4 max-w-2xl text-xl">
            Sonic Multiplicities: Expanding the solo instrumentalist through AI and DSP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-red-500" /> The Sonic Multiplicities Framework
              </h2>

              <p className="text-white/70 leading-relaxed mb-4">
                Sonic Multiplicities is a radical approach to music creation that expands the capabilities of a solo
                instrumentalist through artificial intelligence and digital signal processing. Developed since 2010,
                this framework represents a fundamental shift in how we think about musical performance and composition.
              </p>

              <p className="text-white/70 leading-relaxed mb-4">
                At its core, Sonic Multiplicities creates a unified, broadened musical consciousness by leveraging
                neural networks and real-time audio processing. The system begins and ends with acoustic output from a
                human performer, creating a feedback loop that enhances rather than diminishes the human element.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="flex items-start">
                  <Cpu className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Custom Hardware & Software</h3>
                    <p className="text-white/70 text-sm">
                      <strong>All hardware and software</strong> used in these performances were built and designed by
                      Andrew Grathwohl. This includes custom DSP algorithms, neural network models, and physical
                      interfaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Play className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Live Performance</h3>
                    <p className="text-white/70 text-sm">
                      <strong>All recordings are captured live</strong> with no mixing or mastering. What you hear is
                      the raw output of the performance system, preserving the authenticity and immediacy of the moment.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-4">
                Key concepts of the Sonic Multiplicities framework include:
              </p>

              <ul className="list-disc pl-6 text-white/70 space-y-2 mb-4">
                <li>
                  <strong>Hypermusic</strong> - A permissive and flexible approach to music distribution that embraces
                  the digital age
                </li>
                <li>
                  <strong>Expanded Consciousness</strong> - Using AI to extend the performer's musical awareness and
                  capabilities
                </li>
                <li>
                  <strong>Acoustic Foundation</strong> - All digital processing begins and ends with acoustic sound
                </li>
                <li>
                  <strong>Feedback Loop</strong> - Creating a continuous dialogue between performer and machine
                </li>
                <li>
                  <strong>Free Software Principles</strong> - Embracing open-source tools and transparent processes
                </li>
              </ul>

              <div className="flex justify-center mt-6">
                <Link
                  href="https://multipli.city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-white/20 px-4 py-2 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="mr-2">Visit the official Sonic Multiplicities site</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Music className="mr-2 h-5 w-5 text-red-500" /> Live Performances
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">POP III. (Tyler Dinner, Guitar)</h3>
                  <div className="aspect-video bg-black/50 mb-3">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/IoH3NQG9HtY"
                      title="POP III. (Tyler Dinner, Guitar)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-white/70 text-sm">
                    A live performance featuring Tyler Dinner on guitar, processed through the Sonic Multiplicities
                    system. The AI responds to the guitar input in real-time, creating an expanded sonic landscape.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">POP IV. (Tyler Dinner, Guitar)</h3>
                  <div className="aspect-video bg-black/50 mb-3">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/wYF-lkRIyRQ"
                      title="POP IV. (Tyler Dinner, Guitar)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-white/70 text-sm">
                    Another exploration of the Sonic Multiplicities system with Tyler Dinner. This performance
                    demonstrates the system's ability to create complex harmonic structures from a single instrument
                    input.
                  </p>
                </div>
              </div>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-red-500" /> CPU/GOD
              </h2>

              <p className="text-white/70 leading-relaxed mb-6">
                CPU/GOD represents another facet of my musical exploration, blending electronic production with
                experimental approaches to rhythm and texture. This project pushes the boundaries of dance music while
                maintaining a connection to underground club culture.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">CPU/GOD - Too Much Booty</h3>
                  <div className="aspect-video bg-black/50 mb-3">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/5mVANl5B_-0"
                      title="CPU/GOD - Too Much Booty"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-white/70 text-sm">
                    Directed and produced by Brittin Richter, this video showcases the raw energy and experimental
                    nature of the CPU/GOD project. The visual aesthetic complements the track's unconventional approach
                    to electronic music.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">CPU/GOD - Rave Slave</h3>
                  <div className="aspect-video bg-black/50 mb-3">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/3R3ZLoDWvTg"
                      title="CPU/GOD - Rave Slave"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="border-l-2 border-red-500 pl-4 py-2 bg-white/5">
                    <p className="text-white/80 text-sm italic">
                      "Rave Slave" became an underground summer hit in London around 2011, frequently appearing in DJ
                      sets and playlists throughout the city's club scene. The track was featured in notable mixes
                      including
                      <Link
                        href="https://xlr8r.com/podcasts/dva/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:underline ml-1"
                      >
                        DVA's XLR8R podcast
                      </Link>
                      , cementing its place in London's electronic music landscape of that era.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mt-6 mb-8">
                Like all my musical projects, CPU/GOD embraces a DIY ethos with custom-built software and hardware.
                These tracks were created using the same principles that guide Sonic Multiplicities: live performance,
                no post-production, and a commitment to authentic expression through technology.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Volume 1: Sacred Data (2014)</h3>
                <iframe
                  src="https://open.spotify.com/embed/album/6HUXcaeIkpMAUEIhPZhJUb?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full"
                ></iframe>
                <p className="text-white/70 text-sm mt-3">
                  Released in 2014, "Volume 1: Sacred Data" is a 9-track album that showcases the full range of the
                  CPU/GOD sound. The album features collaborations with artists like Commodora and Forest, exploring
                  various facets of experimental electronic music.
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="border border-white/20 p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4">Technical Framework</h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom-built neural networks for real-time audio processing</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Linux-based audio system with ultra-low latency</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">JACK audio connection kit for flexible routing</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Pure Data and SuperCollider for DSP algorithms</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Custom hardware interfaces for intuitive control</span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">Free software tools exclusively throughout the chain</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium mb-3">Key Innovations</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Real-time musical AI that "talks back" to performers</li>
                  <li>• Hypermusic distribution framework</li>
                  <li>• Novel fundamentals emphasizing soloist expression</li>
                  <li>• AI free improvisation system</li>
                  <li>• Acoustic-digital feedback loop</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <blockquote className="italic text-white/70">
                  "Sonic Multiplicities represents the most extreme effort ever made towards empowering the solo
                  instrumentalist with software."
                </blockquote>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

