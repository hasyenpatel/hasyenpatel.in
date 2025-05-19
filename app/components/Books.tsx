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
        const [showSuggestionForm, setShowSuggestionForm] = useState(false);
        const [suggestion, setSuggestion] = useState({ title: '', author: '', why: '', suggestedBy: '' });
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [submitSuccess, setSubmitSuccess] = useState(false);

        // Filter books based on search term and filter type
        const filteredBooks = searchTerm
                ? allBooks.filter((book) => {
                        const term = searchTerm.toLowerCase();
                        if (filterType === 'all') {
                                return book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term);
                        } else if (filterType === 'title') {
                                return book.title.toLowerCase().includes(term);
                        } else {
                                return book.author.toLowerCase().includes(term);
                        }
                })
                : allBooks;

        // Handle suggestion input changes
        const handleSuggestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                setSuggestion(prev => ({ ...prev, [name]: value }));
        };

        // Handle suggestion form submission
        const handleSuggestionSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                if (!suggestion.title || !suggestion.author) return;

                setIsSubmitting(true);
                try {
                        // Send the suggestion data to the contact API endpoint
                        const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                        name: 'Book Suggestion',
                                        email: 'booksuggestion@example.com',
                                        message: `Book Suggestion:\n\nTitle: ${suggestion.title}\nAuthor: ${suggestion.author}\nReason: ${suggestion.why || 'No reason provided'}\nSuggested by: ${suggestion.suggestedBy || 'Anonymous'}`
                                }),
                        });

                        if (!res.ok) {
                                throw new Error('Failed to submit suggestion');
                        }

                        // Show success message
                        setSubmitSuccess(true);

                        // Reset form after delay
                        setTimeout(() => {
                                setShowSuggestionForm(false);
                                setSuggestion({ title: '', author: '', why: '', suggestedBy: '' });
                                setSubmitSuccess(false);
                        }, 3000);
                } catch (error) {
                        console.error('Error submitting book suggestion:', error);
                        // Could add error state here if needed
                } finally {
                        setIsSubmitting(false);
                }
        };

        return (
                <section id="books" className="py-20 bg-white dark:bg-black">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center mb-10"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">Books I've Read</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                A collection of books that have shaped my thinking and knowledge.
                                        </p>
                                </motion.div>

                                {/* Search and filter controls */}
                                <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
                                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                                <div className="relative w-full md:w-64">
                                                        <input
                                                                type="text"
                                                                placeholder="Search books..."
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none transition-all"
                                                        />
                                                        {searchTerm && (
                                                                <button
                                                                        onClick={() => setSearchTerm('')}
                                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                                                >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                                        </svg>
                                                                </button>
                                                        )}
                                                </div>

                                                {/* Improved Filter buttons with pill style */}
                                                <div className="flex items-center gap-3">
                                                        <div className="flex space-x-2">
                                                                <button
                                                                        onClick={() => setFilterType('all')}
                                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filterType === 'all'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                }`}
                                                                >
                                                                        All
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('title')}
                                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filterType === 'title'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                }`}
                                                                >
                                                                        Title
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('author')}
                                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filterType === 'author'
                                                                                ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                }`}
                                                                >
                                                                        Author
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Book suggestion button */}
                                        <motion.button
                                                onClick={() => setShowSuggestionForm(true)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-4 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:shadow-md transition-all duration-300 w-full sm:w-auto"
                                        >
                                                <span className="flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                        </svg>
                                                        Suggest a Book
                                                </span>
                                        </motion.button>
                                </div>

                                {/* Book grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                        {filteredBooks.map((book, index) => (
                                                <BookTile key={`${book.title}-${index}`} book={book} index={index} />
                                        ))}
                                </div>

                                {/* Show message if no books found */}
                                {filteredBooks.length === 0 && (
                                        <div className="text-center py-10">
                                                <p className="text-gray-600 dark:text-gray-400">No books found matching your search criteria.</p>
                                        </div>
                                )}

                                {/* Book suggestion modal */}
                                {showSuggestionForm && (
                                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                                                <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.9 }}
                                                        className="bg-white dark:bg-black rounded-xl p-6 max-w-md w-full relative"
                                                >
                                                        <button
                                                                onClick={() => setShowSuggestionForm(false)}
                                                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                                        >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                        </button>

                                                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Suggest a Book</h3>

                                                        {submitSuccess ? (
                                                                <motion.div
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-4 rounded-lg mb-4"
                                                                >
                                                                        <p className="font-medium">Thanks for your suggestion!</p>
                                                                        <p className="text-sm mt-1">I'll definitely check it out.</p>
                                                                </motion.div>
                                                        ) : (
                                                                <form onSubmit={handleSuggestionSubmit}>
                                                                        <div className="mb-4">
                                                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="title">
                                                                                        Book Title*
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="title"
                                                                                        name="title"
                                                                                        value={suggestion.title}
                                                                                        onChange={handleSuggestionChange}
                                                                                        required
                                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                                                />
                                                                        </div>

                                                                        <div className="mb-4">
                                                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="author">
                                                                                        Author*
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="author"
                                                                                        name="author"
                                                                                        value={suggestion.author}
                                                                                        onChange={handleSuggestionChange}
                                                                                        required
                                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                                                />
                                                                        </div>

                                                                        <div className="mb-4">
                                                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="suggestedBy">
                                                                                        Suggested by
                                                                                </label>
                                                                                <input
                                                                                        type="text"
                                                                                        id="suggestedBy"
                                                                                        name="suggestedBy"
                                                                                        value={suggestion.suggestedBy}
                                                                                        onChange={handleSuggestionChange}
                                                                                        placeholder="Your name"
                                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                                                />
                                                                        </div>

                                                                        <div className="mb-6">
                                                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="why">
                                                                                        Why should I read it?
                                                                                </label>
                                                                                <textarea
                                                                                        id="why"
                                                                                        name="why"
                                                                                        value={suggestion.why}
                                                                                        onChange={handleSuggestionChange}
                                                                                        rows={3}
                                                                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                                                                />
                                                                        </div>

                                                                        <motion.button
                                                                                type="submit"
                                                                                whileHover={{ scale: 1.03 }}
                                                                                whileTap={{ scale: 0.97 }}
                                                                                className="w-full py-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg"
                                                                                disabled={isSubmitting}
                                                                        >
                                                                                {isSubmitting ? (
                                                                                        <span className="flex items-center justify-center">
                                                                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                                                </svg>
                                                                                                Submitting...
                                                                                        </span>
                                                                                ) : "Submit Suggestion"}
                                                                        </motion.button>
                                                                </form>
                                                        )}
                                                </motion.div>
                                        </div>
                                )}
                        </div>
                </section>
        );
} 