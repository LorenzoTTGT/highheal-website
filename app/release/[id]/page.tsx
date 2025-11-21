import Link from 'next/link';
import Image from 'next/image';
import { releases } from '@/data/releases';
import { notFound } from 'next/navigation';
import PlatformIcon from '@/components/PlatformIcon';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const release = releases.find(r => r.id === id);

  if (!release) {
    return {
      title: 'Release Not Found',
    };
  }

  return {
    title: `${release.title} - ${release.artist} | HIGH HEAL`,
    description: release.description,
    openGraph: {
      title: `${release.title} - ${release.artist}`,
      description: release.description,
      url: `https://high-heal.com/release/${release.id}`,
      siteName: 'HIGH HEAL',
      images: [
        {
          url: release.artwork,
          width: 1200,
          height: 1200,
          alt: `${release.title} by ${release.artist}`,
        },
      ],
      locale: 'en_US',
      type: 'music.album',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${release.title} - ${release.artist}`,
      description: release.description,
      images: [release.artwork],
    },
  };
}

export default async function ReleasePage({ params }: PageProps) {
  const { id } = await params;
  const release = releases.find(r => r.id === id);

  if (!release) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header with back button - Sticky */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 p-4">
        <div className="max-w-2xl lg:max-w-7xl mx-auto">
          <Link href="/" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-2">
            <span>←</span> Back to releases
          </Link>
        </div>
      </header>

      {/* Mobile-First Layout with Desktop Split Screen */}
      <div className="max-w-2xl lg:max-w-7xl mx-auto">
        {/* Main Content */}
        <main className="p-4 md:p-6 lg:flex lg:gap-8 lg:items-start lg:min-h-[calc(100vh-73px)]">
          {/* Left Side: Artwork (Desktop) */}
          <div className="lg:sticky lg:top-[73px] lg:w-1/2 lg:h-[calc(100vh-73px)] lg:flex lg:items-center lg:justify-center lg:p-8">
            {/* Artwork */}
            <div className="w-full aspect-square relative rounded-lg overflow-hidden mb-6 lg:mb-0 shadow-2xl lg:max-w-2xl">
              <Image
                src={release.artwork}
                alt={`${release.title} by ${release.artist}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side: Content (Desktop) */}
          <div className="lg:w-1/2 lg:py-8">
            {/* Title & Artist */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{release.title}</h1>
              <p className="text-xl md:text-2xl text-gray-400">{release.artist}</p>
              <p className="text-sm text-gray-500 mt-2">{release.releaseDate}</p>
            </div>

            {/* Platform Links - Linktree Style */}
            <div className="space-y-3 mb-8">
              {release.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-full py-4 px-6 text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <PlatformIcon platform={link.platform} />
                  <span>Listen on {link.platform}</span>
                </a>
              ))}
            </div>

            {/* Tracklist */}
            <div className="mb-8 bg-[#252525] rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Tracklist</h2>
              <div className="space-y-3">
                {release.tracks.map((track) => (
                  <div key={track.number} className="flex items-start gap-3 text-sm">
                    <span className="text-gray-500 font-mono min-w-[2rem]">{track.number.toString().padStart(2, '0')}</span>
                    <span className="text-gray-300 flex-1">{track.title}</span>
                    <span className="text-gray-500 font-mono">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 bg-[#252525] rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-3">About</h2>
              <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                {release.description}
              </p>
            </div>

            {/* Credits */}
            <div className="mb-6 bg-[#252525] rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-3">Credits</h2>
              <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                {release.credits}
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 p-4 text-center text-gray-500 text-sm lg:hidden">
          <p>&copy; 2025 HIGH HEAL</p>
        </footer>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return releases.map((release) => ({
    id: release.id,
  }));
}
