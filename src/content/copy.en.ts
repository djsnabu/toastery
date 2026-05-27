export const site = {
  name: 'Toastery',
  tagline: 'Cafe · Bar · Terrace',
  location: 'Gate 21 · Schengen · Helsinki Airport',
  instagram: 'https://www.instagram.com/toasterycafebar/',
  instagramHandle: '@toasterycafebar',
  hashtag: '#Toastery',
  finaviaPage:
    'https://www.finavia.fi/en/airports/helsinki-airport/dining/toastery-cafe-bar-terrace',
  finaviaMap:
    'https://www.finavia.fi/en/airports/helsinki-airport/airport-map',
} as const;

export const hero = {
  label: 'Gate 21 · Schengen · Helsinki Airport',
  headline: 'Your Schengen-side cafe & bar stop.',
  subline: 'Open 24h. Coffee, cocktails and terrace vibes before takeoff.',
  badge: 'Open 24h',
} as const;

export const cafe = {
  label: 'Cafe',
  title: 'Toast before boarding.',
  points: [
    'Toasts, salads and sweet treats — fresh and ready when you are.',
    'Grab a seat or take it to your gate.',
    'Coffee station with that cafe-green calm.',
  ],
} as const;

export const bar = {
  label: 'Bar',
  title: 'Cocktail before takeoff.',
  points: [
    'Cocktails and mocktails from some of Finland’s finest bartenders.',
    'Quality wines and beers for a relaxed pre-flight stop.',
    'Warm charcoal evenings, pink accent, no fuss.',
  ],
} as const;

export const terrace = {
  label: 'Terrace',
  title: 'Airport terrace. Open around the clock.',
  line: 'The only 24h terrace at Helsinki Airport — weather permitting, always worth a look.',
  badge: '3am toast? Yes.',
} as const;

export const findUs = {
  label: 'Find us',
  title: 'Gate 21, Schengen side.',
  hours: 'Open 24/7',
  ctaMap: 'Open airport map',
  ctaFinavia: 'More on Finavia',
} as const;

export const journal = {
  label: 'Journal',
  title: 'Stories from Gate 21',
  intro: 'Toasts, late nights, terrace moments and pre-flight drinks.',
  readAll: 'Read the journal',
  backToJournal: 'Back to journal',
  findCta: 'Find us at Gate 21',
} as const;

export const tagLabels: Record<string, string> = {
  toast: 'Toast',
  '24h': '24h',
  terrace: 'Terrace',
  coffee: 'Coffee',
  bar: 'Bar',
};
