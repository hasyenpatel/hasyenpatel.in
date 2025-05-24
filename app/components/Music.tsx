'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define types
type Track = {
        id: number;
        title: string;
        artist: string;
        album: string;
        genre: string;
        duration: string;
        spotifyId?: string;
        // For embedded playback
        youtubeId?: string;
};

const musicList: Track[] = [
        // Keep exactly 24 tracks - Selected mix of Western, Bollywood and Gujarati songs
        {
                id: 1,
                title: 'Blinding Lights',
                artist: 'The Weeknd',
                album: 'After Hours',
                genre: 'Synth-pop',
                duration: '3:20',
                youtubeId: '4NRXx6U8ABQ'
        },
        {
                id: 2,
                title: 'As It Was',
                artist: 'Harry Styles',
                album: "Harry's House",
                genre: 'Pop Rock',
                duration: '2:47',
                youtubeId: 'H5v3kku4y6Q'
        },
        {
                id: 3,
                title: 'Flowers',
                artist: 'Miley Cyrus',
                album: 'Endless Summer Vacation',
                genre: 'Pop',
                duration: '3:20',
                youtubeId: 'G7KNmW9a75Y'
        },
        {
                id: 4,
                title: 'Anti-Hero',
                artist: 'Taylor Swift',
                album: 'Midnights',
                genre: 'Pop',
                duration: '3:15',
                youtubeId: 'b1kbLwvqugk'
        },
        {
                id: 5,
                title: 'Save Your Tears',
                artist: 'The Weeknd',
                album: 'After Hours',
                genre: 'Synth-pop',
                duration: '3:35',
                youtubeId: 'XXYlFuWEuKI'
        },
        {
                id: 6,
                title: 'Levitating',
                artist: 'Dua Lipa',
                album: 'Future Nostalgia',
                genre: 'Pop',
                duration: '3:23',
                youtubeId: 'TUVcZfQe-Kw'
        },
        {
                id: 7,
                title: 'Peaches',
                artist: 'Justin Bieber',
                album: 'Justice',
                genre: 'R&B',
                duration: '3:18',
                youtubeId: 'tQ0yjYUFKAE'
        },
        {
                id: 8,
                title: 'Shape of You',
                artist: 'Ed Sheeran',
                album: 'Divide',
                genre: 'Pop',
                duration: '3:53',
                youtubeId: 'JGwWNGJdvx8'
        },
        // Bollywood
        {
                id: 9,
                title: 'Kesariya',
                artist: 'Arijit Singh',
                album: 'Brahmāstra',
                genre: 'Bollywood',
                duration: '4:28',
                youtubeId: 'BddP6PYo2gs'
        },
        {
                id: 10,
                title: 'Barso Re',
                artist: 'Shreya Ghoshal',
                album: 'Guru',
                genre: 'Bollywood',
                duration: '4:42',
                youtubeId: 'asw-wTDzGUQ'
        },
        {
                id: 11,
                title: 'Kun Faya Kun',
                artist: 'A.R. Rahman, Javed Ali, Mohit Chauhan',
                album: 'Rockstar',
                genre: 'Bollywood/Sufi',
                duration: '7:52',
                youtubeId: 'T94PHkuydcw'
        },
        {
                id: 12,
                title: 'Jai Ho',
                artist: 'A.R. Rahman, Sukhwinder Singh',
                album: 'Slumdog Millionaire',
                genre: 'World Music',
                duration: '5:19',
                youtubeId: 'xwwAVRyNmgQ'
        },
        {
                id: 13,
                title: 'Masakali',
                artist: 'A.R. Rahman, Mohit Chauhan',
                album: 'Delhi-6',
                genre: 'Bollywood',
                duration: '4:49',
                youtubeId: 'SS3lIQdKP-A'
        },
        {
                id: 14,
                title: 'Naina Da Kya Kasoor',
                artist: 'Amit Trivedi, Arijit Singh',
                album: 'Andhadhun',
                genre: 'Bollywood',
                duration: '3:32',
                youtubeId: 'zdXiSlRrgWQ'
        },
        {
                id: 15,
                title: 'Iktara',
                artist: 'Amit Trivedi, Kavita Seth',
                album: 'Wake Up Sid',
                genre: 'Bollywood',
                duration: '4:12',
                youtubeId: 'fSS_R91Nimw'
        },
        {
                id: 16,
                title: 'Chogada',
                artist: 'Darshan Raval, Asees Kaur',
                album: 'Loveyatri',
                genre: 'Gujarati/Bollywood',
                duration: '3:32',
                youtubeId: 'asYxxtiWUyw'
        },
        // Gujarati
        {
                id: 17,
                title: 'Dholida',
                artist: 'Jahnvi Shrimankar, Osman Mir',
                album: 'Gangubai Kathiawadi',
                genre: 'Gujarati/Bollywood',
                duration: '2:37',
                youtubeId: '2iPkNp0TU70'
        },
        {
                id: 18,
                title: 'Rangtaali',
                artist: 'Jigardan Gadhvi',
                album: 'Gujarati Folk',
                genre: 'Gujarati Folk',
                duration: '5:47',
                youtubeId: '0lE9Lh_vI0Q'
        },
        {
                id: 19,
                title: 'Odhaji',
                artist: 'Sachin-Jigar, Osman Mir',
                album: 'Made In China',
                genre: 'Gujarati/Bollywood',
                duration: '3:13',
                youtubeId: 'VeiUQrYrg_s'
        },
        {
                id: 20,
                title: 'Chaand Ne Kaho',
                artist: 'Aditya Gadhvi',
                album: 'Single',
                genre: 'Gujarati Folk',
                duration: '4:05',
                youtubeId: '1lLDPqUixgk'
        },
        {
                id: 21,
                title: 'Gori Radha Ne Kaalo Kaan',
                artist: 'Kirtidan Gadhvi',
                album: 'Single',
                genre: 'Gujarati Folk',
                duration: '3:50',
                youtubeId: 'ccqg6e2rfLU'
        },
        {
                id: 22,
                title: 'Vhalam Aavo Ne',
                artist: 'Jigardan Gadhavi',
                album: 'Love Ni Bhavai',
                genre: 'Gujarati',
                duration: '4:21',
                youtubeId: '5gIpqS-Qpzw'
        },
        {
                id: 23,
                title: 'Udi Udi Jaye',
                artist: 'Sukhwinder Singh, Bhoomi Trivedi, Kirtidan Gadhvi',
                album: 'Raees',
                genre: 'Gujarati/Bollywood',
                duration: '4:08',
                youtubeId: 'WQfdwsPao9E'
        },
        {
                id: 24,
                title: 'Khalasi',
                artist: 'Aditya Gadhvi',
                album: 'Coke Studio Bharat',
                genre: 'Gujarati Folk',
                duration: '3:25',
                youtubeId: 't7wSjy9Lv-o'
        }
];

// Track tile component for grid layout
const TrackTile = ({
        track,
        index,
        isActive,
        onClick
}: {
        track: Track;
        index: number;
        isActive: boolean;
        onClick: () => void;
}) => {
        return (
                <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: index % 9 * 0.05 }}
                        onClick={onClick}
                        className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 ${isActive
                                ? 'ring-4 ring-primary dark:ring-primary-dark z-10 scale-105'
                                : 'hover:scale-105 hover:shadow-lg'
                                }`}
                >
                        {/* Album art */}
                        {track.youtubeId && (
                                <img
                                        src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
                                        alt={`${track.title} by ${track.artist}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                />
                        )}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>

                        {/* Track info */}
                        <div className="absolute bottom-0 left-0 right-0 p-1.5 xs:p-2 sm:p-3 text-white">
                                <h3 className="font-bold text-xs xs:text-sm truncate">{track.title}</h3>
                                <p className="text-[10px] xs:text-xs text-white/80 truncate">{track.artist}</p>
                        </div>

                        {/* Play indicator */}
                        {isActive && (
                                <div className="absolute top-1.5 xs:top-2 right-1.5 xs:right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 text-white">
                                                <path d="M8 5.14v14l11-7-11-7z" />
                                        </svg>
                                </div>
                        )}
                </motion.div>
        );
};

export default function Music() {
        const [activeIndex, setActiveIndex] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');
        const [filterType, setFilterType] = useState<'all' | 'title' | 'author'>('all');
        const activeTrack = musicList[activeIndex];
        const [youtubeReady, setYoutubeReady] = useState(false);
        const youtubePlayerRef = useRef<HTMLIFrameElement>(null);

        // Filter tracks based on search term and filterType
        const filteredTracks = musicList.filter((track) => {
                const q = searchTerm.toLowerCase();

                // No search term, return all tracks
                if (!q) return true;

                // Filter based on selected filter type
                if (filterType === 'title') {
                        return track.title.toLowerCase().includes(q);
                } else if (filterType === 'author') {
                        return track.artist.toLowerCase().includes(q);
                } else {
                        // 'all' - search in title, artist, album and genre
                        return (
                                track.title.toLowerCase().includes(q) ||
                                track.artist.toLowerCase().includes(q) ||
                                track.album.toLowerCase().includes(q) ||
                                track.genre.toLowerCase().includes(q)
                        );
                }
        });

        // Toggle YouTube video play/pause
        const togglePlay = () => {
                if (!activeTrack.youtubeId) return;

                const iframe = youtubePlayerRef.current;
                if (!iframe) return;

                if (isPlaying) {
                        // Pause video
                        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else {
                        // Play video
                        iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                }

                setIsPlaying(!isPlaying);
        };

        // Handle track change
        useEffect(() => {
                // Reset playing state when track changes
                setIsPlaying(false);

                // Add slight delay before playing new track
                if (youtubeReady && youtubePlayerRef.current) {
                        const iframe = youtubePlayerRef.current;

                        // Load new video
                        iframe.contentWindow?.postMessage(
                                `{"event":"command","func":"loadVideoById","args":"${activeTrack.youtubeId}"}`,
                                '*'
                        );
                }
        }, [activeIndex, youtubeReady, activeTrack.youtubeId]);

        // Handle selecting a track from the grid
        const handleTrackSelect = (index: number) => {
                setActiveIndex(index);

                // Auto-play when selecting a track
                if (youtubeReady && !isPlaying) {
                        setTimeout(() => {
                                togglePlay();
                        }, 500);
                }
        };

        return (
                <section id="music" className="py-20 bg-white dark:bg-black">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center mb-16"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">My Music Vibes</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                A collection of my favorite tunes spanning Western hits, Bollywood classics, and Gujarati folk music.
                                        </p>
                                </motion.div>

                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                                        {/* Music Grid Section */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                className="w-full lg:w-3/5 lg:pr-4"
                                        >
                                                {/* Search and filter controls */}
                                                <div className="mb-6 sm:mb-8 flex flex-col md:flex-row items-center gap-4 justify-between">
                                                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                                <div className="relative w-full md:w-64">
                                                                <input
                                                                        type="text"
                                                                                placeholder="Search music..."
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

                                                                <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
                                                                <button
                                                                        onClick={() => setFilterType('all')}
                                                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${filterType === 'all'
                                                                                        ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                        }`}
                                                                >
                                                                        All
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('title')}
                                                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${filterType === 'title'
                                                                                        ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                        }`}
                                                                >
                                                                        Title
                                                                </button>
                                                                <button
                                                                        onClick={() => setFilterType('author')}
                                                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${filterType === 'author'
                                                                                        ? 'bg-primary dark:bg-primary-dark text-white shadow-md'
                                                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                                                        }`}
                                                                >
                                                                        Artist
                                                                </button>
                                                                </div>
                                                        </div>
                                                </div>

                                                {/* Scrollable music grid container with adjusted height for mobile */}
                                                <div className="h-[350px] sm:h-[400px] md:h-[500px] overflow-y-auto pr-2 custom-scrollbar rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                                                        {filteredTracks.length > 0 ? (
                                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 auto-rows-max">
                                                                        {filteredTracks.map((track, index) => (
                                                                                <TrackTile
                                                                                        key={track.id}
                                                                                        track={track}
                                                                                        index={index}
                                                                                        isActive={activeIndex === musicList.findIndex(t => t.id === track.id)}
                                                                                        onClick={() => handleTrackSelect(musicList.findIndex(t => t.id === track.id))}
                                                                                />
                                                                        ))}
                                                                </div>
                                                        ) : (
                                                                <div className="flex h-full items-center justify-center">
                                                                        <p className="text-gray-500 dark:text-gray-400">No tracks match your search</p>
                                                                </div>
                                                        )}
                                                </div>

                                                {/* Track count indicator */}
                                                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-right">
                                                        Showing {filteredTracks.length} of {musicList.length} tracks
                                                </div>
                                        </motion.div>

                                        {/* Player Section */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                className="w-full lg:w-2/5 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg self-start mt-6 lg:mt-32 max-w-full lg:mx-0"
                                        >
                                                {/* YouTube Embed with adjusted ratio for smaller width */}
                                                <div className="relative pb-[56.25%] sm:pb-[52%] h-0 overflow-hidden border-b border-gray-200 dark:border-gray-700">
                                                        <iframe
                                                                ref={youtubePlayerRef}
                                                                src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?enablejsapi=1`}
                                                                title={`${activeTrack.title} by ${activeTrack.artist}`}
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                                className="absolute top-0 left-0 w-full h-full"
                                                                onLoad={() => setYoutubeReady(true)}
                                                        ></iframe>
                                                </div>

                                                {/* Player Controls - Clean, modern design */}
                                                <div className="p-3 sm:p-4 md:p-5">
                                                        {/* Album info and progress */}
                                                        <div className="mb-3 sm:mb-4 md:mb-6">
                                                                <div className="flex items-center mb-1.5">
                                                                        <span className="text-gray-500 dark:text-gray-400 text-xs mr-2">Album:</span>
                                                                        <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{activeTrack.album}</span>
                                                                        <div className="ml-auto flex items-center">
                                                                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-500 flex items-center justify-center mr-1.5 sm:mr-2">
                                                                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                                                                </div>
                                                                                <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{activeTrack.duration}</span>
                                                                        </div>
                                                                </div>

                                                                {/* Progress bar */}
                                                                <div className="relative h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                                        <div className="absolute top-0 left-0 h-1.5 bg-indigo-500 rounded-full w-[35%]"></div>
                                                                </div>
                                                        </div>

                                                        {/* Song info */}
                                                        <div className="text-center mb-4 sm:mb-5 md:mb-8">
                                                                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">{activeTrack.title}</h3>
                                                                <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">{activeTrack.artist}</p>
                                                        </div>

                                                        {/* Controls */}
                                                        <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-10">
                                                                <button className="text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
                                                                                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                                                                        </svg>
                                                                </button>

                                                                <button
                                                                        onClick={togglePlay}
                                                                        className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600 transition-colors focus:outline-none"
                                                                >
                                                                        {isPlaying ? (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                                                                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                                                                                </svg>
                                                                        ) : (
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                                                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                                                                </svg>
                                                                        )}
                                                                </button>

                                                                <button className="text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8">
                                                                                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                </div>
                                        </motion.div>
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