'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define Book type
type Book = {
        title: string;
        author: string;
        date?: string;
        description: string;
};

// Combined list of all books
const allBooks: Book[] = [
        // January
        { title: 'Nine Things Successful People Do Differently', author: 'Heidi Grant Halvorson', description: '' },
        { title: 'You Will Find Your People', author: 'Lane Moore', description: '' },
        { title: 'The Art of Making Memories', author: 'Meik Wiking', description: '' },
        { title: 'Moon Shot', author: 'Alan Shepard, Deke Slayton & Jay Barbree', description: '' },
        { title: 'Breath', author: 'James Nestor', description: '' },

        // February
        { title: 'Love, Pamela', author: 'Pamela Anderson', description: '' },
        { title: 'Ten Arguments for Deleting Your Social Media Accounts Right Now', author: 'Jaron Lanier', description: '' },
        { title: 'No Rules Rules', author: 'Reed Hastings & Erin Meyer', description: '' },

        // March
        { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J. K. Rowling', description: '' },
        { title: 'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling', description: '' },

        // April
        { title: 'The Obesity Code', author: 'Dr Jason Fung', description: '' },

        // May
        { title: 'Zero to One', author: 'Peter Thiel', description: '' },
        { title: 'Shoe Dog', author: 'Phil Knight', description: '' },
        { title: 'Outliers: The Story of Success', author: 'Malcolm Gladwell', description: '' },
        { title: 'Harry Potter and the Prisoner of Azkaban', author: 'J. K. Rowling', description: '' },

        // June
        { title: 'Who Will Cry When You Die?', author: 'Robin Sharma', description: '' },
        { title: 'The Storyteller: Tales of Life and Music', author: 'Dave Grohl', description: '' },

        // July
        { title: '101 Essays That Will Change the Way You Think', author: 'Brianna Wiest', description: '' },
        { title: 'The Mountain Is You', author: 'Brianna Wiest', description: '' },

        // August
        { title: 'Soundtracks', author: 'Jon Acuff', description: '' },

        // September
        { title: 'How to Read a Person Like a Book', author: 'Gerard Nierenberg & Henry H. Calero', description: '' },
        { title: 'The Alchemist', author: 'Paulo Coelho', description: '' },

        // October
        { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgensen', description: '' },

        // November
        { title: 'Funny Story', author: 'Emily Henry', description: '' },

        // December
        { title: 'Friends, Lovers, and the Big Terrible Thing', author: 'Matthew Perry', description: '' },
        { title: 'Seven Brief Lessons on Physics', author: 'Carlo Rovelli', description: '' },
        { title: 'The Psychology of Money', author: 'Morgan Housel', description: '' },
        { title: 'The Light We Carry', author: 'Michelle Obama', description: '' },

        // 2022
        { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', description: '' },
        { title: 'Becoming', author: 'Michelle Obama', description: '' },
        { title: 'Mahashweta', author: 'Sudha Murthy', description: '' },
        { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', description: '' },
        { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', description: '' },
        { title: 'Start With Why', author: 'Simon Sinek', description: '' },
        { title: 'The Ride of a Lifetime', author: 'Robert Iger', description: '' },
        { title: 'Here, There and Everywhere', author: 'Sudha Murthy', description: '' },
        { title: 'Ignited Minds', author: 'A. P. J. Abdul Kalam', description: '' },
        { title: 'Atomic Habits', author: 'James Clear', description: '' },
        { title: 'Hit Refresh', author: 'Satya Nadella', description: '' },
        { title: 'Talking to Strangers', author: 'Malcolm Gladwell', description: '' },
        { title: 'The Wonder Down Under', author: 'Nina Brochmann & Ellen Støkken Dahl', description: '' },
        { title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', description: '' },
        { title: 'Three Thousand Stitches', author: 'Sudha Murthy', description: '' },
        { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', description: '' },
        { title: 'I\'m Glad My Mom Died', author: 'Jennette McCurdy', description: '' }
];

// ────────────────────────────────────────────────────────────
// BookCover – HD Google Books → Open Library → placeholder
// ────────────────────────────────────────────────────────────
const BookCover = ({ title, author }: { title: string; author: string }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const q = encodeURIComponent(`${title} ${author}`);
        const r = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=1`
        );
        const data = await r.json();
        const links = data.items?.[0]?.volumeInfo?.imageLinks ?? {};
        const hd =
          links.extraLarge || links.large || links.medium || links.thumbnail;
        if (active && hd) setSrc(hd.replace('&edge=curl', '')); // cleaner url
      } catch {
        /* ignore fetch errors */
      }
    })();

    return () => {
      active = false;
    };
  }, [title, author]);

  const fallback = `https://covers.openlibrary.org/b/title/${encodeURIComponent(
    title
  )}-M.jpg`;

  return (
    <img
      src={src || fallback}
      alt={`${title} cover`}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/cover-placeholder.png';
      }}
    />
  );
};

// Book Tile component for grid layout
const BookTile = ({
        book,
        index,
}: {
        book: Book;
        index: number;
}) => {
        // Get a consistent color for each book based on title
        const getBookColor = (title: string) => {
                // Simple hash function to generate a number from title
                const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

                // Array of background colors in gradient format
                const colors = [
                        'from-blue-400 to-blue-600',
                        'from-green-400 to-green-600',
                        'from-purple-400 to-purple-600',
                        'from-pink-400 to-pink-600',
                        'from-yellow-400 to-yellow-600',
                        'from-red-400 to-red-600',
                        'from-indigo-400 to-indigo-600',
                        'from-cyan-400 to-cyan-600',
                        'from-orange-400 to-orange-600',
                        'from-teal-400 to-teal-600',
                ];

                return colors[hash % colors.length];
        };

        const bookColor = getBookColor(book.title);

        return (
                <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: index % 16 * 0.05 }}
                        className="relative aspect-square cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                        {/* Book cover or fallback gradient */}
                        <div className="w-full h-full relative">
                                {/* Gradient background (fallback) */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${bookColor}`}></div>

                                {/* Book cover from Open Library */}
                                <BookCover title={book.title} author={book.author} />

                                {/* Gradient overlay for text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>

                                {/* Book info */}
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                                        <h3 className="font-bold text-sm truncate">{book.title}</h3>
                                        <p className="text-xs text-white/80 truncate">{book.author}</p>
                                </div>
                        </div>
                </motion.div>
        );
};

export default function Books() {
        const [searchTerm, setSearchTerm] = useState('');
        const [filterType, setFilterType] = useState('all'); // 'all', 'title', 'author'

        // Filter books based on search term and filter type
        const filteredBooks = searchTerm
                ? allBooks.filter(book => {
                        const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
                        const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());

                        if (filterType === 'title') return titleMatch;
                        if (filterType === 'author') return authorMatch;
                        return titleMatch || authorMatch; // 'all'
                })
                : allBooks;

        return (
                <section id="books" className="py-20 bg-slate-50 dark:bg-gray-900">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="mb-12"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">My Reading Journey</h2>
                                        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                                Books that have shaped my thinking and broadened my perspective.
                                        </p>
                                </motion.div>

                                <div className="mx-auto">
                                        {/* Search and filter controls */}
                                        <div className="mb-8 max-w-2xl mx-auto">
                                                <div className="flex flex-col sm:flex-row gap-3">
                                                        {/* Search input */}
                                                        <div className="relative flex-1">
                                                                <input
                                                                        type="text"
                                                                        value={searchTerm}
                                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                                        placeholder="Search books..."
                                                                        className="w-full py-2 px-4 pr-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-white"
                                                                />
                                                                <div className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                                        </svg>
                                                                </div>
                                                        </div>

                                                        {/* Filter buttons */}
                                                        <div className="flex gap-2">
                                                                <button
                                                                        onClick={() => setFilterType('all')}
                                                                        className={`px-4 py-2 rounded-md transition-colors ${filterType === 'all'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white'
                                                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                                                }`}
                                                                >
                                                                        All
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('title')}
                                                                        className={`px-4 py-2 rounded-md transition-colors ${filterType === 'title'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white'
                                                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                                                }`}
                                                                >
                                                                        Title
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('author')}
                                                                        className={`px-4 py-2 rounded-md transition-colors ${filterType === 'author'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white'
                                                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                                                }`}
                                                                >
                                                                        Author
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Books grid layout */}
                                        <div className="px-4">
                                                <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                                        {filteredBooks.length > 0 ? (
                                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                                        {filteredBooks.map((book, index) => (
                                                                                <BookTile
                                                                                        key={`book-${index}`}
                                                                                        book={book}
                                                                                        index={index}
                                                                                />
                                                                        ))}
                                                                </div>
                                                        ) : (
                                                                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                                                                        No books found matching your search.
                                                                </div>
                                                        )}
                                                </div>
                                        </div>

                                        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
                                                Showing {filteredBooks.length} of {allBooks.length} books
                                        </div>
                                </div>
                        </div>



                        {/* CSS for custom scrollbar */}
                        <style jsx global>{`
                                .custom-scrollbar {
                                        scrollbar-width: thin;
                                        scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
                                }
                                
                                .custom-scrollbar::-webkit-scrollbar {
                                        width: 6px;
                                }
                                
                                .custom-scrollbar::-webkit-scrollbar-track {
                                        background: transparent;
                                }
                                
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                        background-color: rgba(155, 155, 155, 0.5);
                                        border-radius: 20px;
                                        border: transparent;
                                }
                                
                                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                                        background-color: rgba(200, 200, 200, 0.3);
                                }
                        `}</style>
                </section>
        );
} 