import { Metadata } from 'next';
import Image from 'next/image';
import { getAllMovies, getMovieById } from '@/lib/data';
import { Star, Calendar, Clock, BarChart3 } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return {
      title: 'Not Found - CineHub',
    };
  }

  return {
    title: `${movie.title} - CineHub`,
    description: movie.description,
    openGraph: {
      title: movie.title,
      description: movie.description,
      type: 'video.movie',
    },
  };
}

export async function generateStaticParams() {
  const movies = getAllMovies();
  return movies.map(movie => ({
    id: movie.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    notFound();
  }

  const allMovies = getAllMovies();
  const relatedMovies = allMovies
    .filter(m => m.genres.some(g => movie.genres.includes(g)) && m.id !== movie.id)
    .slice(0, 6);

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="relative h-96 md:h-[32rem] overflow-hidden">
        <Image
          src={movie.backdropUrl}
          alt={movie.title}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative overflow-hidden rounded-xl shadow-2xl bg-slate-200 dark:bg-slate-700">
                <Image
                  src={movie.posterUrl}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-end pb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {movie.title}
              </h1>

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                  <Star size={20} className="fill-current" />
                  {movie.rating}
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Calendar size={20} />
                  {movie.releaseYear}
                </div>
                {movie.duration && (
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Clock size={20} />
                    {movie.duration} min
                  </div>
                )}
                {movie.seasons && (
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <BarChart3 size={20} />
                    {movie.seasons} Seasons
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map(genre => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {movie.description}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Credits</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Director
                  </h3>
                  <p className="text-lg text-slate-900 dark:text-white">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                    Cast
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast.map(actor => (
                      <span
                        key={actor}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                  Information
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">Type</dt>
                    <dd className="text-slate-900 dark:text-white capitalize">{movie.type}</dd>
                  </div>
                  {movie.releaseYear && (
                    <div>
                      <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">Release Year</dt>
                      <dd className="text-slate-900 dark:text-white">{movie.releaseYear}</dd>
                    </div>
                  )}
                  {movie.duration && (
                    <div>
                      <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">Duration</dt>
                      <dd className="text-slate-900 dark:text-white">{movie.duration} minutes</dd>
                    </div>
                  )}
                  {movie.seasons && (
                    <div>
                      <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">Seasons</dt>
                      <dd className="text-slate-900 dark:text-white">{movie.seasons}</dd>
                    </div>
                  )}
                  {movie.episodes && (
                    <div>
                      <dt className="text-sm font-medium text-slate-600 dark:text-slate-300">Episodes</dt>
                      <dd className="text-slate-900 dark:text-white">{movie.episodes}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {relatedMovies.length > 0 && (
          <section className="py-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-8">Related {movie.type === 'movie' ? 'Movies' : 'Shows'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {relatedMovies.map(related => (
                <MovieCard key={related.id} movie={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
