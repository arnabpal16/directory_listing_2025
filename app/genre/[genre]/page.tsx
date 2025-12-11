import { Metadata } from 'next';
import Link from 'next/link';
import { getAllMovies, getAllGenres } from '@/lib/data';
import MovieCard from '@/components/MovieCard';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const genres = getAllGenres();
  return genres.map(genre => ({
    genre: genre.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ genre: string }> }): Promise<Metadata> {
  const { genre } = await params;
  const displayGenre = genre.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${displayGenre} - CineHub`,
    description: `Browse all ${displayGenre} movies and TV shows on CineHub.`,
    openGraph: {
      title: `${displayGenre} - CineHub`,
      description: `Browse all ${displayGenre} movies and TV shows`,
    },
  };
}

interface Props {
  params: Promise<{ genre: string }>;
}

export default async function GenrePage({ params }: Props) {
  const { genre } = await params;
  const displayGenre = genre.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const allGenres = getAllGenres();

  const genreExists = allGenres.some(
    g => g.toLowerCase().replace(/\s+/g, '-') === genre
  );

  if (!genreExists) {
    notFound();
  }

  const allMovies = getAllMovies();
  const genreMovies = allMovies.filter(m =>
    m.genres.map(g => g.toLowerCase().replace(/\s+/g, '-')).includes(genre)
  ).sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            {displayGenre}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore {genreMovies.length} {displayGenre} titles in our collection.
          </p>
        </div>

        <div className="mb-8">
          <Link href="/movies" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400">
            ← Back to Movies
          </Link>
        </div>

        {genreMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {genreMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No {displayGenre} titles found in our collection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
