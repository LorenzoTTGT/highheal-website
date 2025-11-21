import { SiBandcamp, SiSoundcloud, SiSpotify, SiApplemusic, SiYoutube } from 'react-icons/si';
import React from 'react';

interface PlatformIconProps {
  platform: string;
  className?: string;
}

export default function PlatformIcon({ platform, className = "w-5 h-5" }: PlatformIconProps) {
  const platformIcons: Record<string, React.ReactElement> = {
    'Bandcamp': <SiBandcamp className={className} />,
    'SoundCloud': <SiSoundcloud className={className} />,
    'Spotify': <SiSpotify className={className} />,
    'Apple Music': <SiApplemusic className={className} />,
    'YouTube': <SiYoutube className={className} />
  };

  return platformIcons[platform] || null;
}
