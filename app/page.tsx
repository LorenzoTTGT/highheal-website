import Link from 'next/link';
import Image from 'next/image';
import { releases } from '@/data/releases';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">HIGH HEAL</h1>
          <p className="text-gray-400 text-sm md:text-base">gathering of soulmates to heal through music</p>
          <p className="text-gray-400 text-sm md:text-base">safe space to be vulnerable</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-sm">
            <a href="http://www.instagram.com/highheal00/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Instagram
            </a>
            <a href="http://soundcloud.com/highheal00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              SoundCloud
            </a>
            <a href="http://www.youtube.com/channel/UC6p7hlImQ-SYcv-AcgNZTGg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              YouTube
            </a>
          </div>
        </div>
      </header>

      {/* Releases Grid */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {releases.map((release) => (
            <Link
              key={release.id}
              href={`/release/${release.id}`}
              className="group"
            >
              <div className="bg-[#252525] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition">
                <div className="aspect-square relative">
                  <Image
                    src={release.artwork}
                    alt={`${release.title} by ${release.artist}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold group-hover:text-gray-300 transition">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{release.artist}</p>
                  <p className="text-gray-500 text-xs mt-1">{release.releaseDate}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 HIGH HEAL. Paris, France.</p>
        </div>
      </footer>
    </div>
  );
}
