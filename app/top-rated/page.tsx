import { Metadata } from 'next';
import { getAllMovies } from '@/lib/data';
import MovieCard from '@/components/MovieCard';

export const metadata: Metadata = {
  title: 'Top Rated - CineHub',
  description: 'Discover the highest-rated movies and TV shows on CineHub. Browse critically acclaimed entertainment.',
  openGraph: {
    title: 'Top Rated - CineHub',
    description: 'Discover the highest-rated movies and TV shows',
  },
};

export default function TopRatedPage() {
  const allMovies = getAllMovies();
  const topRated = [...allMovies].sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Top Rated
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore the highest-rated content across our entire collection. These are the gems that audiences love most.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-slate-600 dark:text-slate-400">
            Showing {topRated.length} items
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topRated.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
