export interface Movie {
  id: string;
  title: string;
  type: 'movie' | 'show';
  genres: string[];
  rating: number;
  releaseYear: number;
  description: string;
  director: string;
  cast: string[];
  posterUrl: string;
  backdropUrl: string;
  duration?: number;
  seasons?: number;
  episodes?: number;
}

export const movies: Movie[] = [
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    type: 'movie',
    genres: ['Drama', 'Crime'],
    rating: 9.3,
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    posterUrl: 'https://images.pexels.com/photos/1116150/pexels-photo-1116150.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116150/pexels-photo-1116150.jpeg',
    duration: 142,
  },
  {
    id: 'the-godfather',
    title: 'The Godfather',
    type: 'movie',
    genres: ['Crime', 'Drama'],
    rating: 9.2,
    releaseYear: 1972,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest and most reluctant son.',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    posterUrl: 'https://images.pexels.com/photos/6888407/pexels-photo-6888407.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/6888407/pexels-photo-6888407.jpeg',
    duration: 175,
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    type: 'movie',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    releaseYear: 2008,
    description: 'When the menace known as The Joker unleashes his reign of chaos and terror on Gotham, Batman must accept one of the greatest psychological tests.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    posterUrl: 'https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg',
    duration: 152,
  },
  {
    id: 'pulp-fiction',
    title: 'Pulp Fiction',
    type: 'movie',
    genres: ['Crime', 'Drama'],
    rating: 8.9,
    releaseYear: 1994,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    posterUrl: 'https://images.pexels.com/photos/1116149/pexels-photo-1116149.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116149/pexels-photo-1116149.jpeg',
    duration: 154,
  },
  {
    id: 'forrest-gump',
    title: 'Forrest Gump',
    type: 'movie',
    genres: ['Drama', 'Romance'],
    rating: 8.8,
    releaseYear: 1994,
    description: 'The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.',
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Sally Field', 'Gary Sinise'],
    posterUrl: 'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg',
    duration: 142,
  },
  {
    id: 'inception',
    title: 'Inception',
    type: 'movie',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 8.8,
    releaseYear: 2010,
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    posterUrl: 'https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg',
    duration: 148,
  },
  {
    id: 'the-matrix',
    title: 'The Matrix',
    type: 'movie',
    genres: ['Action', 'Sci-Fi'],
    rating: 8.7,
    releaseYear: 1999,
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    posterUrl: 'https://images.pexels.com/photos/1116148/pexels-photo-1116148.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116148/pexels-photo-1116148.jpeg',
    duration: 136,
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    type: 'movie',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.6,
    releaseYear: 2014,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    posterUrl: 'https://images.pexels.com/photos/1116147/pexels-photo-1116147.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116147/pexels-photo-1116147.jpeg',
    duration: 169,
  },
  {
    id: 'fight-club',
    title: 'Fight Club',
    type: 'movie',
    genres: ['Drama'],
    rating: 8.8,
    releaseYear: 1999,
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.',
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    posterUrl: 'https://images.pexels.com/photos/1116146/pexels-photo-1116146.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116146/pexels-photo-1116146.jpeg',
    duration: 139,
  },
  {
    id: 'goodfellas',
    title: 'Goodfellas',
    type: 'movie',
    genres: ['Crime', 'Drama'],
    rating: 8.7,
    releaseYear: 1990,
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    director: 'Martin Scorsese',
    cast: ['Robert De Niro', 'Ray Liotta', 'Paul Sorvino'],
    posterUrl: 'https://images.pexels.com/photos/1116145/pexels-photo-1116145.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116145/pexels-photo-1116145.jpeg',
    duration: 146,
  },
  {
    id: 'the-silence-of-the-lambs',
    title: 'The Silence of the Lambs',
    type: 'movie',
    genres: ['Crime', 'Drama', 'Thriller'],
    rating: 8.6,
    releaseYear: 1991,
    description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    director: 'Jonathan Demme',
    cast: ['Jodie Foster', 'Scott Glenn', 'Anthony Hopkins'],
    posterUrl: 'https://images.pexels.com/photos/1116144/pexels-photo-1116144.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116144/pexels-photo-1116144.jpeg',
    duration: 118,
  },
  {
    id: 'saving-private-ryan',
    title: 'Saving Private Ryan',
    type: 'movie',
    genres: ['Drama', 'War'],
    rating: 8.6,
    releaseYear: 1998,
    description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.',
    director: 'Steven Spielberg',
    cast: ['Tom Hanks', 'Edward Burns', 'Tom Sizemore'],
    posterUrl: 'https://images.pexels.com/photos/1116143/pexels-photo-1116143.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/1116143/pexels-photo-1116143.jpeg',
    duration: 169,
  },
  {
    id: 'breaking-bad',
    title: 'Breaking Bad',
    type: 'show',
    genres: ['Crime', 'Drama', 'Thriller'],
    rating: 9.5,
    releaseYear: 2008,
    description: 'A high school chemistry teacher turned meth cook partners with a former student to produce crystal meth.',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
    posterUrl: 'https://images.pexels.com/photos/3532550/pexels-photo-3532550.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532550/pexels-photo-3532550.jpeg',
    seasons: 5,
    episodes: 62,
  },
  {
    id: 'game-of-thrones',
    title: 'Game of Thrones',
    type: 'show',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    rating: 9.3,
    releaseYear: 2011,
    description: 'Nine noble families fight for control over the magical lands of Westeros, while an ancient enemy awakens.',
    director: 'David Benioff, D.B. Weiss',
    cast: ['Emilia Clarke', 'Peter Dinklage', 'Kit Harington'],
    posterUrl: 'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg',
    seasons: 8,
    episodes: 73,
  },
  {
    id: 'sherlock',
    title: 'Sherlock',
    type: 'show',
    genres: ['Crime', 'Drama', 'Mystery'],
    rating: 9.1,
    releaseYear: 2010,
    description: 'A modern update of the classic detective stories about Sherlock Holmes and Dr. Watson.',
    director: 'Mark Gatiss, Steven Moffat',
    cast: ['Benedict Cumberbatch', 'Martin Freeman', 'Rupert Graves'],
    posterUrl: 'https://images.pexels.com/photos/3532548/pexels-photo-3532548.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532548/pexels-photo-3532548.jpeg',
    seasons: 4,
    episodes: 13,
  },
  {
    id: 'the-crown',
    title: 'The Crown',
    type: 'show',
    genres: ['Biography', 'Drama', 'History'],
    rating: 8.6,
    releaseYear: 2016,
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    director: 'Peter Morgan',
    cast: ['Claire Foy', 'Olivia Colman', 'Imelda Staunton'],
    posterUrl: 'https://images.pexels.com/photos/3532547/pexels-photo-3532547.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532547/pexels-photo-3532547.jpeg',
    seasons: 6,
    episodes: 50,
  },
  {
    id: 'stranger-things',
    title: 'Stranger Things',
    type: 'show',
    genres: ['Drama', 'Fantasy', 'Horror', 'Mystery'],
    rating: 8.7,
    releaseYear: 2016,
    description: 'When a young boy disappears, his friends uncover a mystery involving secret government experiments and terrifying supernatural forces.',
    director: 'The Duffer Brothers',
    cast: ['Winona Ryder', 'David Harbour', 'Finn Wolfhard'],
    posterUrl: 'https://images.pexels.com/photos/3532546/pexels-photo-3532546.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532546/pexels-photo-3532546.jpeg',
    seasons: 4,
    episodes: 42,
  },
  {
    id: 'the-office',
    title: 'The Office',
    type: 'show',
    genres: ['Comedy'],
    rating: 9.0,
    releaseYear: 2005,
    description: 'A mockumentary about the lives of office workers in a mundane paper supply company.',
    director: 'Greg Daniels',
    cast: ['Steve Carell', 'Rainn Wilson', 'Jenna Fischer'],
    posterUrl: 'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg',
    seasons: 9,
    episodes: 201,
  },
  {
    id: 'true-detective',
    title: 'True Detective',
    type: 'show',
    genres: ['Crime', 'Drama', 'Mystery'],
    rating: 8.9,
    releaseYear: 2014,
    description: 'An anthology series featuring stand-alone crime dramas with different settings and characters in each season.',
    director: 'Nic Pizzolatto',
    cast: ['Matthew McConaughey', 'Woody Harrelson', 'Colin Farrell'],
    posterUrl: 'https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg',
    seasons: 4,
    episodes: 24,
  },
  {
    id: 'westworld',
    title: 'Westworld',
    type: 'show',
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    rating: 8.5,
    releaseYear: 2016,
    description: 'At a futuristic theme park populated by android host robots, wealthy guests can live out any fantasy in a western setting.',
    director: 'Jonathan Nolan, Lisa Joy',
    cast: ['Evan Rachel Wood', 'James Marsden', 'Ed Harris'],
    posterUrl: 'https://images.pexels.com/photos/3532543/pexels-photo-3532543.jpeg',
    backdropUrl: 'https://images.pexels.com/photos/3532543/pexels-photo-3532543.jpeg',
    seasons: 4,
    episodes: 36,
  },
];

export function getAllMovies(): Movie[] {
  return movies;
}

export function getMovieById(id: string): Movie | undefined {
  return movies.find(m => m.id === id);
}

export function getMoviesByGenre(genre: string): Movie[] {
  return movies.filter(m => m.genres.includes(genre));
}

export function getAllGenres(): string[] {
  const genreSet = new Set<string>();
  movies.forEach(m => {
    m.genres.forEach(g => genreSet.add(g));
  });
  return Array.from(genreSet).sort();
}

export function getTopRatedMovies(limit: number = 10): Movie[] {
  return [...movies].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export function getMoviesByType(type: 'movie' | 'show'): Movie[] {
  return movies.filter(m => m.type === type);
}
