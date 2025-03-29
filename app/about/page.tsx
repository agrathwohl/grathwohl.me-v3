import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Youtube,
  Award,
  Headphones,
  Music,
  Film,
  MapPin,
  Heart,
  Shield,
  Code,
  MessageSquare,
  PenToolIcon as Tool,
  Zap,
  Brain,
} from "lucide-react";
import Header from "@/components/header";
import AlbumSlideshow from "@/components/album-slideshow";

export default function AboutPage() {
  const albumCovers = [
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM012.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM011.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/SM010.jpg",
    "https://sonicmultiplicities.audio/feed/SM009.png",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/pseudo.jpg",
    "https://sonicmultiplicities.audio/feed/SM007.png",
    "https://sonicmultiplicities.audio/feed/mafa.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/adrift.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/adsr.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/fireroom.jpg",
    "https://s3.amazonaws.com//sonicmultiplicities.audio/feed/SM001.jpg",
    "https://s3.amazonaws.com/sonicmultiplicities.audio/feed/lp.jpg",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">
            About
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="border border-white/20 p-6">
              <p className="text-xl leading-relaxed mb-6">
                I'm Andrew Grathwohl, a software and systems engineer and
                technical researcher specializing in multimedia, digital signal
                processing, and content production. My work sits at the
                intersection of audio, technology, and creative expression.
              </p>

              <p className="text-white/70 leading-relaxed mb-6">
                After years in New York City's vibrant tech and media scene, I
                relocated to Nashville, Tennessee, where I now live and
                homestead with my wife and son. Together, we run the{" "}
                <Link
                  href="https://bonaqua.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline inline-flex items-center"
                >
                  Bon Aqua Computer Club{" "}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                .
              </p>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-red-500" /> Digital Freedom
                Advocate
              </h2>

              <p className="text-white/70 leading-relaxed mb-4">
                I'm a passionate advocate for digital freedom and technological
                autonomy. My commitment to free software, privacy, free speech,
                and right-to-repair isn't just philosophical—it's woven into
                everything I create.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start">
                  <Code className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Free Software</h3>
                    <p className="text-white/70 text-sm">
                      I champion open-source solutions and contribute to the
                      free software ecosystem, believing that technology should
                      be transparent, modifiable, and accessible to all.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Privacy</h3>
                    <p className="text-white/70 text-sm">
                      I design with privacy as a fundamental right, not an
                      afterthought. My work emphasizes user control over
                      personal data and protection from surveillance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Free Speech</h3>
                    <p className="text-white/70 text-sm">
                      I believe in platforms that empower voices rather than
                      restrict them, creating technologies that facilitate open
                      discourse and resist censorship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Tool className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Right-to-Repair</h3>
                    <p className="text-white/70 text-sm">
                      I support the right of individuals to maintain and modify
                      their own devices, opposing planned obsolescence and
                      closed hardware ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-red-500" /> Sonic
                Multiplicities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <AlbumSlideshow images={albumCovers} interval={5000} />
                </div>
                <div>
                  <p className="text-white/70 leading-relaxed mb-4">
                    For over 13 years, I've been pioneering the future of
                    musical AI through my project{" "}
                    <Link
                      href="https://multipli.city"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline inline-flex items-center"
                    >
                      Sonic Multiplicities{" "}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                    . What began in 2010 as a radical musical philosophy has
                    evolved into a trailblazing platform that continues to make
                    groundbreaking innovations in real-time musical AI.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    Sonic Multiplicities represents the most extreme effort ever
                    made towards empowering the solo instrumentalist with
                    software. The project constructs a unified, broadened
                    musical consciousness by leveraging neural networks, digital
                    signal processing, and free software principles.
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-4">
                My work with Sonic Multiplicities earned recognition from SEAMUS
                (Society for Electroacoustic Music in the United States), where
                I was honored for pushing the boundaries of what's possible in
                electroacoustic music. The project's innovations include:
              </p>

              <ul className="list-disc pl-6 text-white/70 space-y-2 mb-4">
                <li>
                  A real-time musical AI that can "talk back" to human
                  performers
                </li>
                <li>
                  The HyperMusic framework, a permissive and flexible approach
                  to music distribution
                </li>
                <li>
                  Novel fundamentals that emphasize the soloist's creative
                  expression
                </li>
                <li>
                  An AI free improvisation "friend" that responds with genuine
                  musical understanding
                </li>
              </ul>

              <p className="text-white/70 leading-relaxed">
                What sets Sonic Multiplicities apart is its approach to AI as a
                collaborative partner rather than a replacement for human
                creativity. The system begins and ends with acoustic output from
                a human being, creating a feedback loop that enhances rather
                than diminishes the human element in digital music creation.
              </p>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Music className="mr-2 h-5 w-5 text-red-500" /> Audio
                Engineering & Mastering
              </h2>

              <p className="text-white/70 leading-relaxed mb-4">
                As a mastering engineer under the moniker{" "}
                <Link
                  href="https://www.discogs.com/artist/4406035-Sacred-Data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline inline-flex items-center"
                >
                  Sacred Data <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                , I've worked with numerous artists across genres. One of my
                proudest achievements was mastering{" "}
                <Link
                  href="https://photay.bandcamp.com/album/photay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline inline-flex items-center"
                >
                  Photay's self-titled EP{" "}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                , a breakthrough electronic music release that received critical
                acclaim.
              </p>

              <p className="text-white/70 leading-relaxed">
                My approach to mastering combines technical precision with
                artistic sensitivity, ensuring each project maintains its
                creative vision while achieving professional sound quality.
              </p>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Headphones className="mr-2 h-5 w-5 text-red-500" /> Audible &
                Audiobook Production
              </h2>

              <p className="text-white/70 leading-relaxed mb-4">
                During my tenure at Audible, I served as Director of ACX audio
                operations, scaling production from 200 to over 3,000 audiobooks
                monthly. My contributions to the field were recognized with an
                Audie Award for excellence in audiobook production.
              </p>

              <p className="text-white/70 leading-relaxed mb-4">
                I'm also the inventor behind Audible's voice search technology
                (US Patent #9412395), which revolutionized how listeners
                discover content.
              </p>

              <p className="text-white/70 leading-relaxed">
                As{" "}
                <Link
                  href="https://www.youtube.com/playlist?list=PLiEDe_4RIMjvGE_6S-R4QjZDVFUQZ-7cO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline inline-flex items-center"
                >
                  "Andrew the Audio Scientist"{" "}
                  <Youtube className="ml-1 h-3 w-3" />
                </Link>
                , I created educational content demystifying audio production
                techniques for creators and listeners alike.
              </p>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Film className="mr-2 h-5 w-5 text-red-500" /> Film & Television
              </h2>

              <p className="text-white/70 leading-relaxed">
                My background spans beyond audio into film and television
                production, where I've applied my technical expertise to create
                immersive viewing experiences. This cross-disciplinary
                experience informs my approach to multimedia projects, ensuring
                technical excellence across visual and auditory elements.
              </p>
            </section>

            <section className="border border-white/20 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-red-500" /> From NYC to
                Nashville
              </h2>

              <p className="text-white/70 leading-relaxed">
                My journey from the fast-paced tech scene of New York City to
                the creative community of Nashville represents my evolution as
                both a technologist and artist. In Tennessee, I've found the
                perfect balance between cutting-edge technology and a connection
                to the land through homesteading. This unique perspective
                influences my work, combining technical innovation with
                authentic creative expression.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <section className="border border-white/20 p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-4">Highlights</h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Pioneer in musical AI with Sonic Multiplicities (13+ years)
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    SEAMUS award winner for electroacoustic music innovation
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Audie Award winner for audiobook production
                  </span>
                </li>
                <li className="flex items-start">
                  <Music className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Mastering engineer for Photay's acclaimed self-titled EP
                  </span>
                </li>
                <li className="flex items-start">
                  <Headphones className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Former Director of ACX audio operations at Audible
                  </span>
                </li>
                <li className="flex items-start">
                  <Code className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Free software advocate and open-source contributor
                  </span>
                </li>
                <li className="flex items-start">
                  <Tool className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Right-to-repair and digital freedom champion
                  </span>
                </li>
                <li className="flex items-start">
                  <Youtube className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Creator of "Andrew the Audio Scientist" educational series
                  </span>
                </li>
                <li className="flex items-start">
                  <Film className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Experience in film and television production
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Homesteading in Tennessee with my wife and son
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-lg font-medium mb-3">Connect</h3>
                <Link
                  href="/Andrew-Grathwohl-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border border-white/20 py-2 px-4 hover:bg-white/5 transition-colors"
                >
                  View Resume
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
