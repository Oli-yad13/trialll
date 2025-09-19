import { Show } from '@/types'

export const kanaTvShows: Show[] = [
  // DRAMA SHOWS
  {
    id: 'yewef-gojo',
    title: 'Yewef Gojo (Üç Kız Kardeş)',
    description: 'Family, secrets, and romance. Flagship dubbed drama airing primetime.',
    type: 'drama',
    status: 'ongoing',
    schedule: 'Mon–Fri, 7:00 PM (part of 3-hour primetime drama block)',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: true,
    trending: true,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['dubbed', 'turkish', 'flagship', 'primetime']
  },
  {
    id: 'hulet-lib',
    title: 'Hulet Lib',
    description: 'Dubbed serial in Kana\'s primetime block.',
    type: 'drama',
    status: 'ongoing',
    schedule: 'Mon–Fri, part of primetime drama block',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['dubbed', 'primetime']
  },
  {
    id: 'sinibit-sinkul-hiwot',
    title: 'Sinibit / Sinkul Hiwot',
    description: 'Serialized international drama with local Amharic title.',
    type: 'drama',
    status: 'ongoing',
    schedule: 'Mon–Fri primetime',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['dubbed', 'international', 'amharic']
  },
  {
    id: 'other-dubbed-dramas',
    title: 'Other Dubbed Dramas',
    description: 'Ezel, Muhteşem Yüzyıl, Kara Para Aşk, Yalan, Siyah Kalp, Kaderimin Oyunu – rotated in nightly block.',
    type: 'drama',
    status: 'ongoing',
    schedule: 'Mon–Fri, primetime drama block',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['dubbed', 'turkish', 'rotating', 'classics']
  },
  {
    id: 'lijes',
    title: 'Lijes',
    description: 'Locally produced drama, Kana\'s flagship 2025 hit.',
    type: 'drama',
    status: 'ongoing',
    schedule: 'Weekly primetime slot',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: true,
    trending: true,
    latest: true,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['original', 'local', 'flagship', '2025']
  },

  // VARIETY SHOWS
  {
    id: 'zare-ke-kana',
    title: 'Zare Ke Kana',
    description: '5-hour Sunday tentpole mixing film reunions, quizzes, cook-offs, reports, true crime, and music.',
    type: 'variety',
    status: 'ongoing',
    schedule: 'Sundays, 5 hours',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: true,
    trending: true,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['variety', 'sunday', 'tentpole', 'flagship']
  },
  {
    id: 'kesira-behuala',
    title: 'Kesira Behuala',
    description: 'Panel tackles social issues like child marriage, gender equality, cost of living.',
    type: 'variety',
    status: 'ongoing',
    schedule: 'Weekly, 30m TV + 1h extended YouTube version',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['debate', 'social-issues', 'gen-z', 'millennials']
  },
  {
    id: 'megenagna',
    title: 'Megenagna (መገናኛ)',
    description: 'Interviews with celebrities and cultural figures; investigative tone.',
    type: 'variety',
    status: 'ongoing',
    schedule: 'Weekly late-night slot',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['talk-show', 'interviews', 'celebrities', 'investigative']
  },
  {
    id: 'kana-cinema',
    title: 'Kana Cinema',
    description: 'Ethiopian films and dubbed Hollywood blockbusters.',
    type: 'variety',
    status: 'ongoing',
    schedule: 'Weekends, 3 hours',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['movies', 'ethiopian', 'hollywood', 'family']
  },

  // EDUCATIONAL SHOWS
  {
    id: 'hiwote',
    title: 'Hiwote (ሕይወት)',
    description: 'Covers diseases, addiction, resilience. Trusted by NGOs and health partners.',
    type: 'educational',
    status: 'ongoing',
    schedule: 'Weekly health/lifestyle slot',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['health', 'lifestyle', 'educational', 'ngo']
  },
  {
    id: 'sheqela',
    title: '#Sheqela',
    description: 'Explains economics in simple terms; startup spotlight.',
    type: 'educational',
    status: 'ongoing',
    schedule: 'Weekly primetime',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['business', 'economics', 'startups', 'primetime']
  },
  {
    id: 'ceos',
    title: 'CEOs',
    description: '30-minute intimate interviews with leaders.',
    type: 'educational',
    status: 'ongoing',
    schedule: 'Weekly',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['executive', 'interviews', 'leaders', 'business']
  },

  // NEWS SHOWS
  {
    id: 'kana-zena-kimsha',
    title: 'Kana Zena Kimsha',
    description: '7-minute news recap, inserted during primetime drama breaks.',
    type: 'news',
    status: 'ongoing',
    schedule: 'Nightly in primetime',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['news', 'recap', 'primetime', 'nightly']
  },

  // DOCUMENTARY SHOWS
  {
    id: 'kana-passport',
    title: 'Kana Passport',
    description: 'Amharic-dubbed documentaries from global partners.',
    type: 'documentary',
    status: 'ongoing',
    schedule: 'Weekend daytime',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['documentary', 'amharic', 'global', 'educational']
  },
  {
    id: 'yetibeb-atfa',
    title: 'Yetibeb Atfa (Masters at Work)',
    description: 'Profiles extraordinary Ethiopians; day-in-the-life.',
    type: 'documentary',
    status: 'ongoing',
    schedule: 'Weekly',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['profiles', 'ethiopians', 'day-in-the-life', 'evergreen']
  },

  // MUSIC & ENTERTAINMENT
  {
    id: 'kana-jams',
    title: 'Kana Jams',
    description: 'Live unedited music platform with audience participation.',
    type: 'music',
    status: 'ongoing',
    schedule: 'Weekly / integrated in Zare Ke Kana',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['music', 'live', 'audience', 'participation']
  },
  {
    id: 'jamcast',
    title: 'Jamcast',
    description: 'In-depth artist conversations hosted by Melat Belayneh.',
    type: 'music',
    status: 'ongoing',
    schedule: 'Weekly / periodic',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['podcast', 'artists', 'conversations', 'long-form']
  },
  {
    id: 'zeta-max',
    title: 'Zeta Max',
    description: 'High-quality event recaps hosted by Arsema Yayihrad.',
    type: 'music',
    status: 'ongoing',
    schedule: 'Event-driven',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['event-recaps', 'high-quality', 'brands', 'coverage']
  },
  {
    id: 'sheweda',
    title: 'Sheweda',
    description: 'Dramatic reconstructions of crime stories.',
    type: 'music',
    status: 'ongoing',
    schedule: 'Part of Zare Ke Kana / standalone',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['true-crime', 'dramatic', 'reconstructions', 'short-form']
  },

  // KIDS SHOWS
  {
    id: 'shirshir',
    title: 'Shirshir (ሽርሽር)',
    description: 'Amharic-dubbed cartoons and kids\' shows.',
    type: 'kids',
    status: 'ongoing',
    schedule: 'Weekends, 2 hours',
    youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOV8HtHv0sF4LgshA',
    featured: false,
    trending: false,
    latest: false,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
    tags: ['kids', 'cartoons', 'amharic', 'family-friendly']
  }
]

// Helper functions to get shows by category
export function getShowsByType(type: Show['type']): Show[] {
  return kanaTvShows.filter(show => show.type === type)
}

export function getFeaturedShows(): Show[] {
  return kanaTvShows.filter(show => show.featured)
}

export function getTrendingShows(): Show[] {
  return kanaTvShows.filter(show => show.trending)
}

export function getLatestShows(): Show[] {
  return kanaTvShows.filter(show => show.latest)
}

export function getShowById(id: string): Show | undefined {
  return kanaTvShows.find(show => show.id === id)
}
