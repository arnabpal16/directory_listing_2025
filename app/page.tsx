import Link from 'next/link';
import { getTopRatedMovies, getAllGenres } from '@/lib/data';
import MovieCard from '@/components/MovieCard';
import { Clapperboard, Tv, Sparkles } from 'lucide-react';

export default function Home() {
  const topRated = getTopRatedMovies(6);
  const genres = getAllGenres();

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Discover Your Next Favorite <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Entertainment</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              CineHub is your ultimate destination for exploring the best movies and TV shows. Browse thousands of titles, discover hidden gems, and find exactly what you&apos;re in the mood for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/movies" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                <Clapperboard size={20} />
                Explore Movies
              </Link>
              <Link href="/shows" className="px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors inline-flex items-center justify-center gap-2">
                <Tv size={20} />
                Watch Shows
              </Link>
            </div>
          </div>
          {/* <div className="relative h-96 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
              <Clapperboard size={200} />
            </div>
          </div> */}
          <div className="relative">
  {/* Rotating Border */}
  <div className="absolute inset-0 rounded-2xl border-animation pointer-events-none"></div>

  {/* Your Original Box */}
  <div className="relative h-96 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-2xl overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
      <Clapperboard size={200} />
    </div>
  </div>
</div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-400 transition-colors">
            <Clapperboard className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Curated Movies</h3>
            <p className="text-slate-600 dark:text-slate-400">Hand-picked selection of the best films across all genres.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-400 transition-colors">
            <Tv className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Popular Shows</h3>
            <p className="text-slate-600 dark:text-slate-400">Discover trending TV series from around the world.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-400 transition-colors">
            <Sparkles className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Top Rated</h3>
            <p className="text-slate-600 dark:text-slate-400">Browse highest-rated content with detailed reviews and ratings.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Top Rated</h2>
          <Link href="/top-rated" className="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topRated.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-12">Browse by Genre</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.slice(0, 12).map(genre => (
            <Link
              key={genre}
              href={`/genre/${genre.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-6 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-xl hover:from-orange-100 hover:to-orange-50 dark:hover:from-orange-900 dark:hover:to-orange-800 transition-all transform hover:scale-105 text-center font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-400"
            >
              {genre}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
