export interface Release {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  description: string;
  releaseDate: string;
  credits: string;
  tracks: {
    number: number;
    title: string;

    duration: string;
  }[];
  links: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const releases: Release[] = [
  {
    id: 'eggs',
    title: 'Eggs',
    artist: 'THELIA',
    artwork: '/images/eggs-artwork.jpg',
    description: "'eggs' mixtape\nAll tracks composed in 2018–2019",
    releaseDate: 'November 21, 2025',
    credits: 'Music and mix by THELIA @theliamp\nMastering by Lorenzo Targhetta\nArtwork by Antoine Trapp @ephebe65',
    tracks: [
      { number: 1, title: 'selmacis fountain', duration: '03:09' },
      { number: 2, title: 'ceiling projections', duration: '02:32' },
      { number: 3, title: 'swamp city', duration: '02:20' },
      { number: 4, title: "body's real estate", duration: '03:09' },
      { number: 5, title: 'cold corridor', duration: '01:46' },
      { number: 6, title: "'girl you should know what you're falling for'", duration: '01:50' },
      { number: 7, title: 'fire works', duration: '02:24' },
      { number: 8, title: 'off the roof', duration: '02:35' },
      { number: 9, title: 'horns breaths', duration: '01:37' },
      { number: 10, title: 'needles', duration: '03:10' },
      { number: 11, title: "'sprinkle me'", duration: '03:13' },
      { number: 12, title: 'infiltration', duration: '03:03' },
      { number: 13, title: 'liminal space', duration: '03:24' },
    ],
    links: [
      {
        platform: 'Bandcamp',
        url: 'https://highheal.bandcamp.com/album/eggs',
        icon: '🎵'
      },
      {
        platform: 'SoundCloud',
        url: 'https://soundcloud.com/highheal00/sets/thelia-eggs?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        icon: '☁️'
      }
    ]
  }
];
