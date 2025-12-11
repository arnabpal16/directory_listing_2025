'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <>
      <script suppressHydrationWarning>{`
        (function() {
          const theme = localStorage.getItem('theme');
          if (!theme) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
          } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
        })();
      `}</script>
      {children}
    </>
  );
}
