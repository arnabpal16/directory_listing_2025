import { Metadata } from 'next';
import Link from 'next/link';
import { getMoviesByType, getAllGenres } from '@/lib/data';
import MovieCard from '@/components/MovieCard';
import FilterBar from '@/components/FilterBar';

export const metadata: Metadata = {
  title: 'Movies - CineHub',
  description: 'Browse our extensive collection of movies. Search, filter, and discover films by genre, rating, and year.',
  openGraph: {
    title: 'Movies - CineHub',
    description: 'Browse our extensive collection of movies',
  },
};

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MoviesPage({ searchParams }: Props) {
  const params = await searchParams;
  const allMovies = getMoviesByType('movie');
  const genres = getAllGenres();

  const selectedGenre = params.genre ? (params.genre as string) : null;
  const searchQuery = params.search ? (params.search as string).toLowerCase() : null;
  const sortBy = params.sort ? (params.sort as string) : 'rating';

  let filteredMovies = allMovies;

  if (selectedGenre) {
    filteredMovies = filteredMovies.filter(m =>
      m.genres.map(g => g.toLowerCase().replace(/\s+/g, '-')).includes(selectedGenre)
    );
  }

  if (searchQuery) {
    filteredMovies = filteredMovies.filter(m =>
      m.title.toLowerCase().includes(searchQuery) ||
      m.description.toLowerCase().includes(searchQuery) ||
      m.director.toLowerCase().includes(searchQuery)
    );
  }

  if (sortBy === 'rating') {
    filteredMovies.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'year') {
    filteredMovies.sort((a, b) => b.releaseYear - a.releaseYear);
  } else if (sortBy === 'title') {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Movies
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore our curated collection of {allMovies.length} films from around the world.
          </p>
        </div>

        <FilterBar genres={genres} />

        <div className="mb-8 flex items-center justify-between">
          <p className="text-slate-600 dark:text-slate-400">
            Showing {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
          </p>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">No movies found.</p>
            <Link href="/movies" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold">
              Clear filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
