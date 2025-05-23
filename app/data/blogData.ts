export type BlogPost = {
        id: string;
        title: string;
        excerpt: string;
        date: string;
        category: string;
        readTime: string;
        imageUrl?: string;
        content?: string;
};

export const blogPosts: BlogPost[] = [
        {
                id: 'getting-started-with-aws',
                title: 'Getting Started with AWS',
                excerpt: 'Learn the basics of Amazon Web Services and how to set up your first cloud instance.',
                date: '2023-11-15',
                category: 'Tech',
                readTime: '8 min read',
                imageUrl: '/images/blog/aws.jpg',
                content: 'Full content for Getting Started with AWS...'
        },
        {
                id: 'animation-principles',
                title: 'Core Principles of Animation',
                excerpt: 'Understanding the fundamental principles that make animations feel natural and engaging.',
                date: '2023-10-22',
                category: 'Animation',
                readTime: '6 min read',
                imageUrl: '/images/blog/animation.jpg',
                content: 'Full content for Core Principles of Animation...'
        },
        {
                id: 'react-performance',
                title: 'Optimizing React Performance',
                excerpt: 'Tips and tricks to make your React applications faster and more responsive.',
                date: '2023-09-08',
                category: 'Development',
                readTime: '10 min read',
                imageUrl: '/images/blog/react.jpg',
                content: 'Full content for Optimizing React Performance...'
        },
        {
                id: 'music-production',
                title: 'Home Music Production Setup',
                excerpt: 'Building an effective home studio for music production on a budget.',
                date: '2023-08-17',
                category: 'Music',
                readTime: '7 min read',
                imageUrl: '/images/blog/music.jpg',
                content: 'Full content for Home Music Production Setup...'
        },
        {
                id: 'vancouver-experience',
                title: 'My Life in Vancouver',
                excerpt: 'Personal reflections on living and studying in one of Canada\'s most beautiful cities.',
                date: '2023-07-29',
                category: 'Personal',
                readTime: '12 min read',
                imageUrl: '/images/blog/vancouver.jpg',
                content: `
# My Life in Vancouver

Vancouver has been an incredible chapter in my life journey. Nestled between the Pacific Ocean and the stunning Coast Mountains, this city offers a unique blend of urban living and natural beauty that's hard to find elsewhere.

## The Academic Experience

Studying at the University of British Columbia was both challenging and rewarding. The campus itself is a marvel, perched on a peninsula with breathtaking ocean views on three sides. The diverse student body brought perspectives from around the world, enriching classroom discussions and expanding my worldview.

## Nature at Your Doorstep

One of the most remarkable aspects of life in Vancouver is the accessibility of nature. On weekends, I could:
- Hike the Grouse Grind (affectionately known as "Mother Nature's StairMaster")
- Snowboard at Whistler (just a 2-hour drive away)
- Kayak in False Creek with the city skyline as my backdrop
- Cycle around the seawall at Stanley Park

The proximity to such diverse outdoor activities meant that no matter the season, there was always something to explore.

## Cultural Diversity

Vancouver's cultural mosaic is reflected in its neighborhoods and, most deliciously, in its food scene. From the authentic dim sum in Richmond to the Persian kebabs on the North Shore, culinary adventures were a regular weekend activity. The city's diversity also manifests in its festivals, art, and community events, creating a vibrant cultural tapestry.

## Challenges of City Living

Of course, living in Vancouver comes with its challenges. The housing market is notoriously expensive, and the famous "Vancouver rain" is indeed a reality for much of the year. But there's something about the lush greenery and the fresh air that makes the rainy days worthwhile.

## Looking Back

My time in Vancouver shaped me in ways I'm still discovering. The blend of academic rigor, natural splendor, and cultural diversity created an environment that fostered both personal and professional growth. While my journey has taken me elsewhere, Vancouver will always hold a special place in my heart as the city that taught me to appreciate the delicate balance between urban convenience and natural beauty.

Would I recommend the Vancouver experience to others? In a heartbeat. Just bring a good raincoat, an open mind, and a camera—you'll need all three.
    `
        },
        {
                id: 'flora-fauna-bc',
                title: 'Exploring British Columbia\'s Flora and Fauna',
                excerpt: 'A naturalist\'s guide to the diverse plant and animal life in British Columbia.',
                date: '2023-06-14',
                category: 'Nature',
                readTime: '9 min read',
                imageUrl: '/images/blog/nature.jpg',
                content: 'Full content for Exploring British Columbia\'s Flora and Fauna...'
        },
        {
                id: 'yoga-for-developers',
                title: 'Yoga Practices for Desk-Bound Developers',
                excerpt: 'Simple yoga routines to combat the physical toll of prolonged coding sessions.',
                date: '2023-05-22',
                category: 'Health',
                readTime: '5 min read',
                imageUrl: '/images/blog/yoga.jpg',
                content: 'Full content for Yoga Practices for Desk-Bound Developers...'
        },
        {
                id: 'ai-revolution',
                title: 'The AI Revolution in Creative Industries',
                excerpt: 'How artificial intelligence is transforming animation, music, and visual arts.',
                date: '2023-04-10',
                category: 'AI',
                readTime: '11 min read',
                imageUrl: '/images/blog/ai.jpg',
                content: 'Full content for The AI Revolution in Creative Industries...'
        },
        {
                id: 'space-exploration',
                title: 'The New Era of Space Exploration',
                excerpt: 'From SpaceX to NASA\'s Artemis program: humanity\'s renewed journey to the stars.',
                date: '2023-03-15',
                category: 'Space',
                readTime: '13 min read',
                imageUrl: '/images/blog/space.jpg',
                content: 'Full content for The New Era of Space Exploration...'
        },
        {
                id: 'india-tech-growth',
                title: 'India\'s Rising Tech Ecosystem',
                excerpt: 'How India is positioning itself as a global technology leader and innovation hub.',
                date: '2023-02-08',
                category: 'Tech',
                readTime: '10 min read',
                imageUrl: '/images/blog/india-tech.jpg',
                content: 'Full content for India\'s Rising Tech Ecosystem...'
        },
        {
                id: 'data-visualization',
                title: 'The Art of Data Visualization',
                excerpt: 'Techniques for transforming complex data into insightful visual stories.',
                date: '2023-01-25',
                category: 'Data',
                readTime: '8 min read',
                imageUrl: '/images/blog/data-viz.jpg',
                content: 'Full content for The Art of Data Visualization...'
        },
        {
                id: 'classical-music-influence',
                title: 'Classical Music\'s Influence on Modern Composition',
                excerpt: 'Tracing the threads between Bach, Mozart, and today\'s film and game scores.',
                date: '2022-12-13',
                category: 'Music',
                readTime: '7 min read',
                imageUrl: '/images/blog/classical-music.jpg',
                content: 'Full content for Classical Music\'s Influence on Modern Composition...'
        },
        {
                id: 'modern-literature',
                title: 'Essential Modern Literature Everyone Should Read',
                excerpt: 'A curated list of contemporary books that offer profound insights into our world.',
                date: '2022-11-07',
                category: 'Books',
                readTime: '9 min read',
                imageUrl: '/images/blog/books.jpg',
                content: 'Full content for Essential Modern Literature Everyone Should Read...'
        },
        {
                id: 'sustainable-tech',
                title: 'Sustainable Technology: Beyond the Buzzwords',
                excerpt: 'How the tech industry is addressing environmental concerns through innovation.',
                date: '2022-10-15',
                category: 'Tech',
                readTime: '11 min read',
                imageUrl: '/images/blog/sustainable-tech.jpg',
                content: 'Full content for Sustainable Technology: Beyond the Buzzwords...'
        },
        {
                id: 'digital-health',
                title: 'The Digital Health Revolution',
                excerpt: 'How technology is transforming healthcare accessibility, diagnosis, and treatment.',
                date: '2022-09-20',
                category: 'Health',
                readTime: '10 min read',
                imageUrl: '/images/blog/digital-health.jpg',
                content: 'Full content for The Digital Health Revolution...'
        }
]; 