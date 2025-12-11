import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "CineHub - Movies & Shows Directory",
  description: "Discover the best movies and TV shows. Browse by genre, rating, and year with our comprehensive entertainment directory.",
  keywords: "movies, tv shows, streaming, entertainment, cinema",
  openGraph: {
    title: "CineHub - Movies & Shows Directory",
    description: "Discover the best movies and TV shows",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
