import { Metadata } from 'next';
import Link from 'next/link';
import { getMoviesByType, getAllGenres } from '@/lib/data';
import MovieCard from '@/components/MovieCard';
import FilterBar from '@/components/FilterBar';

export const metadata: Metadata = {
  title: 'TV Shows - CineHub',
  description: 'Browse our extensive collection of TV shows. Search, filter, and discover series by genre, rating, and year.',
  openGraph: {
    title: 'TV Shows - CineHub',
    description: 'Browse our extensive collection of TV shows',
  },
};

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ShowsPage({ searchParams }: Props) {
  const params = await searchParams;
  const allShows = getMoviesByType('show');
  const genres = getAllGenres();

  const selectedGenre = params.genre ? (params.genre as string) : null;
  const searchQuery = params.search ? (params.search as string).toLowerCase() : null;
  const sortBy = params.sort ? (params.sort as string) : 'rating';

  let filteredShows = allShows;

  if (selectedGenre) {
    filteredShows = filteredShows.filter(m =>
      m.genres.map(g => g.toLowerCase().replace(/\s+/g, '-')).includes(selectedGenre)
    );
  }

  if (searchQuery) {
    filteredShows = filteredShows.filter(m =>
      m.title.toLowerCase().includes(searchQuery) ||
      m.description.toLowerCase().includes(searchQuery) ||
      m.director.toLowerCase().includes(searchQuery)
    );
  }

  if (sortBy === 'rating') {
    filteredShows.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'year') {
    filteredShows.sort((a, b) => b.releaseYear - a.releaseYear);
  } else if (sortBy === 'title') {
    filteredShows.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            TV Shows
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore our curated collection of {allShows.length} TV series from around the world.
          </p>
        </div>

        <FilterBar genres={genres} />

        <div className="mb-8 flex items-center justify-between">
          <p className="text-slate-600 dark:text-slate-400">
            Showing {filteredShows.length} {filteredShows.length === 1 ? 'show' : 'shows'}
          </p>
        </div>

        {filteredShows.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredShows.map(show => (
              <MovieCard key={show.id} movie={show} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">No shows found.</p>
            <Link href="/shows" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold">
              Clear filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
