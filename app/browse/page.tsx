import { Metadata } from 'next';
import Link from 'next/link';
import { getAllGenres, getMoviesByGenre } from '@/lib/data';
import MovieCard from '@/components/MovieCard';

export const metadata: Metadata = {
  title: 'Browse - CineHub',
  description: 'Browse movies and TV shows by genre, rating, and type. Discover your next favorite entertainment.',
  openGraph: {
    title: 'Browse - CineHub',
    description: 'Browse by genre, rating, and type',
  },
};

export default function BrowsePage() {
  const genres = getAllGenres();

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Browse
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore our collection organized by genre and popularity.
          </p>
        </div>

        {genres.map(genre => {
          const genreMovies = getMoviesByGenre(genre).sort((a, b) => b.rating - a.rating).slice(0, 6);

          if (genreMovies.length === 0) return null;

          return (
            <section key={genre} className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                  {genre}
                </h2>
                <Link
                  href={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {genreMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
