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
        // Western Music
        {
                id: 1,
                title: 'Blinding Lights',
                artist: 'The Weeknd',
                album: 'After Hours',
                genre: 'Synth-pop',
                duration: '3:20',
                spotifyId: '0VjIjW4GlUZAMYd2vXMi3b',
                youtubeId: '4NRXx6U8ABQ'
        },
        {
                id: 2,
                title: 'As It Was',
                artist: 'Harry Styles',
                album: "Harry's House",
                genre: 'Pop Rock',
                duration: '2:47',
                spotifyId: '4Dvkj6JhhA12EX05fT7y2e',
                youtubeId: 'H5v3kku4y6Q'
        },
        {
                id: 17,
                title: 'Flowers',
                artist: 'Miley Cyrus',
                album: 'Endless Summer Vacation',
                genre: 'Pop',
                duration: '3:20',
                youtubeId: 'G7KNmW9a75Y'
        },
        {
                id: 18,
                title: 'Anti-Hero',
                artist: 'Taylor Swift',
                album: 'Midnights',
                genre: 'Pop',
                duration: '3:15',
                youtubeId: 'b1kbLwvqugk'
        },
        {
                id: 19,
                title: 'Save Your Tears',
                artist: 'The Weeknd',
                album: 'After Hours',
                genre: 'Synth-pop',
                duration: '3:35',
                youtubeId: 'XXYlFuWEuKI'
        },

        // Bollywood - Shreya Ghoshal
        {
                id: 3,
                title: 'Barso Re',
                artist: 'Shreya Ghoshal',
                album: 'Guru',
                genre: 'Bollywood',
                duration: '4:42',
                youtubeId: 'asw-wTDzGUQ'
        },
        // Removed id: 4 (Teri Ore)
        // Removed id: 5 (Deewani Mastani), will add replacement below

        // A.R. Rahman
        {
                id: 6,
                title: 'Kun Faya Kun',
                artist: 'A.R. Rahman, Javed Ali, Mohit Chauhan',
                album: 'Rockstar',
                genre: 'Bollywood/Sufi',
                duration: '7:52',
                youtubeId: 'T94PHkuydcw'
        },
        {
                id: 7,
                title: 'Jai Ho',
                artist: 'A.R. Rahman, Sukhwinder Singh',
                album: 'Slumdog Millionaire',
                genre: 'World Music',
                duration: '5:19',
                youtubeId: 'xwwAVRyNmgQ'
        },
        {
                id: 8,
                title: 'Masakali',
                artist: 'A.R. Rahman, Mohit Chauhan',
                album: 'Delhi-6',
                genre: 'Bollywood',
                duration: '4:49',
                youtubeId: 'SS3lIQdKP-A'
        },

        // Amit Trivedi
        {
                id: 9,
                title: 'Naina Da Kya Kasoor',
                artist: 'Amit Trivedi, Arijit Singh',
                album: 'Andhadhun',
                genre: 'Bollywood',
                duration: '3:32',
                youtubeId: 'zdXiSlRrgWQ'
        },
        {
                id: 10,
                title: 'Iktara',
                artist: 'Amit Trivedi, Kavita Seth',
                album: 'Wake Up Sid',
                genre: 'Bollywood',
                duration: '4:12',
                youtubeId: 'fSS_R91Nimw'
        },

        // Gujarati - Sachin-Jigar
        {
                id: 11,
                title: 'Chogada',
                artist: 'Darshan Raval, Asees Kaur',
                album: 'Loveyatri',
                genre: 'Gujarati/Bollywood',
                duration: '3:32',
                youtubeId: 'asYxxtiWUyw'
        },
        {
                id: 12,
                title: 'Dholida',
                artist: 'Jahnvi Shrimankar, Osman Mir',
                album: 'Gangubai Kathiawadi',
                genre: 'Gujarati/Bollywood',
                duration: '2:37',
                youtubeId: '2iPkNp0TU70'
        },

        // Jigardan Gadhvi
        // Removed id: 13 (Chaar Bangdi Vadi Gadi)
        {
                id: 14,
                title: 'Rangtaali',
                artist: 'Jigardan Gadhvi',
                album: 'Gujarati Folk',
                genre: 'Gujarati Folk',
                duration: '5:47',
                youtubeId: '0lE9Lh_vI0Q'
        },

        // Niren Bhatt - Since he's more of a writer, adding Gujarati songs associated with him
        {
                id: 15,
                title: 'Odhaji',
                artist: 'Sachin-Jigar, Osman Mir',
                album: 'Made In China',
                genre: 'Gujarati/Bollywood',
                duration: '3:13',
                youtubeId: 'VeiUQrYrg_s'
        },
        // Removed id: 16 (Hellaro)

        // --- New Gujarati tracks (ids 20-24) ---
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
          artist: 'Aditya Gadhvi',
          album: 'Single',
          genre: 'Gujarati Folk',
          duration: '3:50',
          youtubeId: 'U_IbIMUbnNg'
        },
        {
          id: 22,
          title: 'Vhalam Aavo Ne',
          artist: 'Jigardan Gadhavi',
          album: 'Love Ni Bhavai',
          genre: 'Gujarati',
          duration: '4:21',
          youtubeId: '3AbK5X9u4E4'
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
          title: 'Radha Ne Shyam Mali Jashe',
          artist: 'Aditya Gadhvi',
          album: 'Single',
          genre: 'Gujarati Folk',
          duration: '3:58',
          youtubeId: 'tTfF5klskmo'
        },

        // --- Bollywood replacement for Deewani Mastani (id 25) ---
        {
          id: 25,
          title: 'Kesariya',
          artist: 'Arijit Singh',
          album: 'Brahmāstra',
          genre: 'Bollywood',
          duration: '4:28',
          youtubeId: 'BddP6PYo2gs'
        },

        // --- Extra English hits (ids 26-30) ---
        {
          id: 26,
          title: 'Levitating',
          artist: 'Dua Lipa',
          album: 'Future Nostalgia',
          genre: 'Pop',
          duration: '3:23',
          youtubeId: 'TUVcZfQe-Kw'
        },
        {
          id: 27,
          title: 'Peaches',
          artist: 'Justin Bieber',
          album: 'Justice',
          genre: 'R&B',
          duration: '3:18',
          youtubeId: 'tQ0yjYUFKAE'
        },
        {
          id: 28,
          title: 'Shape of You',
          artist: 'Ed Sheeran',
          album: 'Divide',
          genre: 'Pop',
          duration: '3:53',
          youtubeId: 'JGwWNGJdvx8'
        },
        {
          id: 29,
          title: 'Believer',
          artist: 'Imagine Dragons',
          album: 'Evolve',
          genre: 'Rock',
          duration: '3:24',
          youtubeId: '7wtfhZwyrcc'
        },
        {
          id: 30,
          title: 'Someone You Loved',
          artist: 'Lewis Capaldi',
          album: 'Divinely Uninspired',
          genre: 'Pop',
          duration: '3:02',
          youtubeId: 'zABLecsR5UE'
        },
        {
          id: 31,
          title: 'Bhuli Javu Che',
          artist: 'Aditya Gadhvi',
          album: 'Single',
          genre: 'Gujarati Folk',
          duration: '4:12',
          youtubeId: 'NcFnmiDe2Qg'
        },
        {
          id: 32,
          title: 'Hanuman Chalisa (Gujarati)',
          artist: 'Aditya Gadhvi',
          album: 'Single',
          genre: 'Gujarati Devotional',
          duration: '7:32',
          youtubeId: 'VigwcGBXKRg'
        },
        {
          id: 33,
          title: 'Khalasi',
          artist: 'Aditya Gadhvi',
          album: 'Coke Studio Bharat',
          genre: 'Gujarati Folk',
          duration: '3:25',
          youtubeId: 't7wSjy9Lv-o'
        },
        {
          id: 34,
          title: 'Moti Veraana (Lagan Gaan)',
          artist: 'Parthiv Gohil',
          album: 'Gujarati Wedding',
          genre: 'Gujarati Folk',
          duration: '5:01',
          youtubeId: 'pXg4s-l_KPM'
        },
        {
          id: 35,
          title: 'Saachi Savar',
          artist: 'Bhoomi Trivedi',
          album: 'Single',
          genre: 'Gujarati Folk',
          duration: '3:48',
          youtubeId: 'k9FHn5_-X2U'
        },
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
                        transition={{ duration: 0.4, delay: index % 16 * 0.05 }}
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
                                />
                        )}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>

                        {/* Track info */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                                <h3 className="font-bold text-sm truncate">{track.title}</h3>
                                <p className="text-xs text-white/80 truncate">{track.artist}</p>
                        </div>

                        {/* Play indicator */}
                        {isActive && (
                                <div className="absolute top-2 right-2 w-8 h-8 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
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
        const [filterType, setFilterType] = useState<'all'|'english'|'bollywood'|'gujarati'|'artist'>('all');
        const activeTrack = musicList[activeIndex];
        const [youtubeReady, setYoutubeReady] = useState(false);
        const youtubePlayerRef = useRef<HTMLIFrameElement>(null);

        // Filter tracks based on search term and filterType
        const filteredTracks = musicList.filter((track) => {
          const q = searchTerm.toLowerCase();

          // Language / category filter
          if (filterType === 'english' && track.genre.toLowerCase().includes('bollywood')) return false;
          if (filterType === 'bollywood' && !track.genre.toLowerCase().includes('bollywood')) return false;
          if (filterType === 'gujarati' && !track.genre.toLowerCase().includes('gujarati')) return false;

          // Artist filter shortcut
          if (filterType === 'artist' && !track.artist.toLowerCase().includes(q)) return false;

          // Text match for title / artist / album / genre
          if (!q) return true;
          return (
            track.title.toLowerCase().includes(q) ||
            track.artist.toLowerCase().includes(q) ||
            track.album.toLowerCase().includes(q) ||
            track.genre.toLowerCase().includes(q)
          );
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
                <section id="music" className="py-20 bg-white dark:bg-gray-900">
                        <div className="container-custom max-w-6xl">
                                <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="text-center mb-12"
                                >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-display text-gray-900 dark:text-white">My Music Vibes</h2>
                                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                                                A collection of my favorite tunes spanning Western hits, Bollywood classics, and Gujarati folk music.
                                        </p>
                                </motion.div>

                                <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Music Grid Section */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                className="lg:w-1/2"
                                        >
                                                {/* Search + Filter */}
                                                <div className="mb-6 flex flex-col sm:flex-row gap-4">
                                                  <div className="relative flex-1">
                                                    <input
                                                      type="text"
                                                      value={searchTerm}
                                                      onChange={(e) => setSearchTerm(e.target.value)}
                                                      placeholder="Search music..."
                                                      className="w-full py-2 px-4 pr-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark text-gray-900 dark:text-white"
                                                    />
                                                    <div className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                  <div className="flex gap-2 flex-wrap">
                                                    {['all','english','bollywood','gujarati','artist'].map(cat => (
                                                      <button
                                                        key={cat}
                                                        onClick={() => setFilterType(cat as any)}
                                                        className={`px-3 py-1 rounded-lg text-sm border ${
                                                          filterType===cat
                                                            ? 'bg-primary text-white border-primary'
                                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'
                                                        }`}
                                                      >
                                                        {cat.charAt(0).toUpperCase()+cat.slice(1)}
                                                      </button>
                                                    ))}
                                                  </div>
                                                </div>

                                                {/* Music grid layout */}
                                                <div className="h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                                        {filteredTracks.length > 0 ? (
                                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                                                        {filteredTracks.map((track, index) => (
                                                                                <TrackTile
                                                                                        key={`track-${track.id}`}
                                                                                        track={track}
                                                                                        index={index}
                                                                                        isActive={activeIndex === musicList.findIndex(t => t.id === track.id)}
                                                                                        onClick={() => handleTrackSelect(musicList.findIndex(t => t.id === track.id))}
                                                                                />
                                                                        ))}
                                                                </div>
                                                        ) : (
                                                                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                                                                        No tracks found matching your search.
                                                                </div>
                                                        )}
                                                </div>

                                                <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                                                        Showing {filteredTracks.length} of {musicList.length} tracks
                                                </div>
                                        </motion.div>

                                        {/* Now Playing Section with YouTube Embed */}
                                        <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6 }}
                                                className="lg:w-1/2"
                                        >
                                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 sticky top-24">
                                                        <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">Now Playing</h3>

                                                        <div className="flex flex-col gap-6">
                                                                {/* Album Art & Video Player */}
                                                                <div className="w-full">
                                                                        <div className="rounded-lg overflow-hidden aspect-video relative shadow-lg">
                                                                                {/* YouTube player */}
                                                                                <iframe
                                                                                        ref={youtubePlayerRef}
                                                                                        src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}&controls=0&rel=0`}
                                                                                        className="w-full h-full absolute inset-0"
                                                                                        title={`${activeTrack.title} by ${activeTrack.artist}`}
                                                                                        frameBorder="0"
                                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                        allowFullScreen
                                                                                        onLoad={() => setYoutubeReady(true)}
                                                                                ></iframe>
                                                                        </div>
                                                                </div>

                                                                {/* Track Info and Controls */}
                                                                <div className="w-full">
                                                                        <div>
                                                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{activeTrack.title}</h2>
                                                                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{activeTrack.artist}</p>
                                                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                                                                        Album: {activeTrack.album} • {activeTrack.genre}
                                                                                </p>
                                                                        </div>

                                                                        {/* Playback controls */}
                                                                        <div className="mt-auto">
                                                                                <div className="flex justify-center items-center space-x-6 mb-6">
                                                                                        <button
                                                                                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                                                                                                onClick={() => setActiveIndex((prev) => (prev === 0 ? musicList.length - 1 : prev - 1))}
                                                                                                aria-label="Previous track"
                                                                                        >
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20L9 12l10-8v16zM5 19V5" />
                                                                                                </svg>
                                                                                        </button>

                                                                                        <button
                                                                                                className="bg-primary dark:bg-primary-dark text-white rounded-full h-14 w-14 flex items-center justify-center hover:bg-opacity-90 transition-all"
                                                                                                onClick={togglePlay}
                                                                                                aria-label={isPlaying ? "Pause" : "Play"}
                                                                                        >
                                                                                                {isPlaying ? (
                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                                                                                                        </svg>
                                                                                                ) : (
                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                                                        </svg>
                                                                                                )}
                                                                                        </button>

                                                                                        <button
                                                                                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
                                                                                                onClick={() => setActiveIndex((prev) => (prev === musicList.length - 1 ? 0 : prev + 1))}
                                                                                                aria-label="Next track"
                                                                                        >
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 4l10 8-10 8V4zM19 5v14" />
                                                                                                </svg>
                                                                                        </button>
                                                                                </div>

                                                                                {/* View on YouTube Button */}
                                                                                <div className="text-center">
                                                                                        <a
                                                                                                href={`https://www.youtube.com/watch?v=${activeTrack.youtubeId}`}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark"
                                                                                        >
                                                                                                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                                                                                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                                                                                                </svg>
                                                                                                Watch on YouTube
                                                                                        </a>
                                                                                </div>
                                                                        </div>
                                                                </div>
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