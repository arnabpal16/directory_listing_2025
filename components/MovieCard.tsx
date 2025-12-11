import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/data';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/${movie.type}/${movie.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-slate-200 dark:bg-slate-700 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
            <div className="flex items-center gap-1 self-start bg-orange-500 px-3 py-1 rounded-full">
              <Star size={14} className="text-white fill-white" />
              <span className="text-white font-semibold text-sm">{movie.rating}</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm line-clamp-2 mb-2">{movie.title}</h3>
              <div className="flex flex-wrap gap-1">
                {movie.genres.slice(0, 2).map(genre => (
                  <span key={genre} className="text-xs bg-slate-700/80 text-slate-200 px-2 py-1 rounded">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 group-hover:text-orange-500 transition-colors">
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm line-clamp-2">{movie.title}</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{movie.releaseYear}</p>
        </div>
      </div>
    </Link>
  );
}
