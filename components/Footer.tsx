import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-white text-lg">CineHub</span>
            </div>
            <p className="text-slate-400 text-sm">Your ultimate entertainment directory for movies and TV shows.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><Link href="/movies" className="text-slate-400 hover:text-orange-400 transition-colors">Movies</Link></li>
              <li><Link href="/shows" className="text-slate-400 hover:text-orange-400 transition-colors">TV Shows</Link></li>
              <li><Link href="/browse" className="text-slate-400 hover:text-orange-400 transition-colors">Browse by Genre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Popular</h4>
            <ul className="space-y-2">
              <li><Link href="/top-rated" className="text-slate-400 hover:text-orange-400 transition-colors">Top Rated</Link></li>
              <li><Link href="/drama" className="text-slate-400 hover:text-orange-400 transition-colors">Drama</Link></li>
              <li><Link href="/crime" className="text-slate-400 hover:text-orange-400 transition-colors">Crime</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Info</h4>
            <ul className="space-y-2">
              <li><Link href="/sitemap" className="text-slate-400 hover:text-orange-400 transition-colors">Sitemap</Link></li>
              <li><a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-400 transition-colors">Images via Pexels</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center">
            {currentYear} CineHub. Created for demonstrating modern web development with Next.js 14 and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
