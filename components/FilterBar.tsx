'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FilterBarProps {
  genres: string[];
}

export default function FilterBar({ genres }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setSelectedGenre(searchParams.get('genre') || '');
    setSortBy(searchParams.get('sort') || 'rating');
  }, [searchParams]);

  const handleFilter = (newSearch?: string, newGenre?: string, newSort?: string) => {
    const params = new URLSearchParams();

    const querySearch = newSearch ?? search;
    const queryGenre = newGenre ?? selectedGenre;
    const querySort = newSort ?? sortBy;

    if (querySearch) params.set('search', querySearch);
    if (queryGenre) params.set('genre', queryGenre);
    if (querySort && querySort !== 'rating') params.set('sort', querySort);

    const pathname = window.location.pathname;
    const queryString = params.toString();
    router.push(`${pathname}${queryString ? '?' + queryString : ''}`);
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by title, director, or description..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilter(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            handleFilter(undefined, undefined, e.target.value);
          }}
          className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="rating">Sort by Rating</option>
          <option value="year">Sort by Year</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setSelectedGenre('');
            handleFilter(undefined, '');
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            !selectedGenre
              ? 'bg-orange-500 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          All Genres
        </button>

        {genres.slice(0, 8).map(genre => (
          <button
            key={genre}
            onClick={() => {
              const newGenre = genre.toLowerCase().replace(/\s+/g, '-');
              setSelectedGenre(newGenre);
              handleFilter(undefined, newGenre);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedGenre === genre.toLowerCase().replace(/\s+/g, '-')
                ? 'bg-orange-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
