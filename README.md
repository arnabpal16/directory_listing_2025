# CineHub - Movies & TV Shows Directory

A modern, full-featured content directory built with Next.js 14, featuring a curated collection of movies and TV shows with search, filtering, and detailed information pages.

## Features

- **Static Site Generation (SSG)**: All pages are pre-rendered as static HTML for optimal performance
- **Search & Filtering**: Full-text search with genre filtering and sorting options
- **Detailed Pages**: Rich, individual pages for each movie and show
- **Dark Mode Support**: Built-in dark/light theme toggle with persistent preferences
- **Responsive Design**: Mobile-first design that works across all devices
- **Genre Browsing**: Browse content by genre with dedicated genre pages
- **Top-Rated Content**: Curated list of highest-rated titles
- **SEO Optimized**: Automatic sitemap generation and SEO metadata
- **Clean UI**: Modern, polished interface inspired by contemporary entertainment platforms

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Data**: Static JSON-based dataset (no database required)
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Dataset

The project includes a dataset of 20 titles:
- **12 Movies**: Including classics and modern films across various genres
- **8 TV Shows**: Popular series from different genres

### Movies Included
The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Forrest Gump, Inception, The Matrix, Interstellar, Fight Club, Goodfellas, The Silence of the Lambs, Saving Private Ryan

### TV Shows Included
Breaking Bad, Game of Thrones, Sherlock, The Crown, Stranger Things, The Office, True Detective, Westworld

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with navigation and footer
│   ├── page.tsx                # Home page with featured content
│   ├── movies/page.tsx         # Movies listing page with search/filter/sort
│   ├── shows/page.tsx          # TV shows listing page with search/filter/sort
│   ├── browse/page.tsx         # Browse all genres
│   ├── top-rated/page.tsx      # Top-rated content
│   ├── genre/[genre]/page.tsx  # Genre-specific pages
│   ├── movie/[id]/page.tsx     # Movie detail pages
│   ├── show/[id]/page.tsx      # Show detail pages
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── globals.css             # Global styles
├── components/
│   ├── Navigation.tsx          # Header navigation with theme toggle
│   ├── Footer.tsx              # Global footer
│   ├── MovieCard.tsx           # Reusable card component
│   ├── FilterBar.tsx           # Search and filter controls
│   └── ThemeProvider.tsx       # Dark mode provider
├── lib/
│   └── data.ts                 # Dataset and data fetching utilities
└── [config files]              # ESLint, Prettier, Tailwind, Next.js config
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit http://localhost:3000 to see the application.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Key Features

### Search & Filtering
- Real-time search by title, director, or description
- Genre filtering with visual indicators
- Sort options: Rating, Year, Alphabetical
- URL parameter persistence for bookmarking

### Dark Mode
- Automatic detection of system preferences
- Manual toggle button in navigation
- Persistent user preference in localStorage
- Smooth transitions between themes

### Static Generation
- All movie/show pages pre-rendered at build time
- Genre pages generated statically
- Automatic sitemap generation
- Optimized for fast page loads

### SEO Optimization
- Dynamic metadata for all pages
- Open Graph integration
- Semantic HTML structure
- Mobile-first responsive design
- XML sitemap and robots.txt

## Design Inspiration

The design draws inspiration from modern entertainment platforms emphasizing:
- Clean, professional typography
- Generous whitespace and visual balance
- Orange/red gradient accents
- Smooth transitions and hover states
- Card-based layouts
- Responsive mobile-first approach

## Deployment

The project is ready and deployed on Vercel.

## Future Enhancements (with 2 more days)

- Watchlist/favorites with persistent storage
- User ratings and reviews system
- Integration with external APIs (TMDB, IMDb)
- User authentication and profiles
- Social sharing capabilities
- Content collections and curated lists


