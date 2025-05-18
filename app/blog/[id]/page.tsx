'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { blogPosts } from '../../components/Blog';

// Blog Post type definition
type BlogPost = {
        id: string;
        title: string;
        excerpt: string;
        content?: string;
        date: string;
        category: string;
        readTime: string;
        imageUrl?: string;
        author?: string;
};

// Define some sample blog content for our posts
const blogContents: Record<string, { content: string, author?: string }> = {
        'vancouver-experience': {
                author: 'Hasyen Patel',
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
        'flora-fauna-bc': {
                author: 'Hasyen Patel',
                content: `
# Exploring British Columbia's Flora and Fauna

British Columbia stands as one of North America's most ecologically diverse regions, home to an astounding variety of plant and animal species. From coastal rainforests to alpine meadows, the province offers naturalists and casual observers alike a glimpse into remarkable ecosystems.

## Coastal Rainforests

The temperate rainforests along BC's coast are among the rarest ecosystems on the planet. These forests are characterized by:

- **Towering Western Red Cedars**: These giants can live for over 1,000 years
- **Diverse Mosses and Lichens**: Creating emerald carpets across the forest floor
- **Sword Ferns**: Spreading their distinctive fronds beneath the forest canopy

The intricate relationships between these plants create a unique habitat that supports countless animal species. During my hikes through these forests, the layered complexity of life was always apparent—from the tiniest fungi to the ancient nurse logs nurturing new growth.

## Marine Life

BC's coastline stretches over 25,000 kilometers, creating endless habitats for marine species:

- **Orcas**: The southern and northern resident pods that hunt and play in the Salish Sea
- **Sea Lions**: Gathering in noisy colonies along rocky shores
- **Countless Intertidal Species**: Sea stars, anemones, and chitons clinging to tide-swept rocks

My experiences whale watching near Victoria revealed the incredible biodiversity beneath the surface. The sight of a humpback whale breaching against the backdrop of forested islands is something I'll never forget.

## Alpine Environments

As elevation increases, BC's landscape transforms dramatically:

- **Alpine Wildflowers**: Creating breathtaking displays during the brief mountain summer
- **Mountain Goats**: Navigating precarious slopes with astonishing ease
- **Marmots**: Including the Vancouver Island Marmot, one of Canada's most endangered mammals

The fragility of these ecosystems becomes apparent when you witness the delicate balance of species that have adapted to these harsh conditions. A hiking trip to Manning Park during wildflower season showed me how these resilient plants make the most of their short growing season.

## Conservation Challenges

British Columbia's natural environments face numerous threats:

- Habitat loss due to development and resource extraction
- Climate change affecting sensitive ecosystems
- Invasive species disrupting ecological balances

Organizations across the province work tirelessly to protect these precious environments through conservation initiatives, educational programs, and sustainable management practices.

## Personal Reflections

My time exploring BC's natural environments has given me a profound appreciation for the intricate connections between species and their habitats. From watching bald eagles fish along the Fraser River to discovering tiny orchids in mountain meadows, each experience has deepened my understanding of these complex ecosystems.

British Columbia's flora and fauna represent an incredible natural heritage—one that deserves our protection and respect. By learning about these species and the habitats they depend on, we take the first step toward ensuring their survival for generations to come.
        `
        },
        'yoga-for-developers': {
                author: 'Hasyen Patel',
                content: `
# Yoga Practices for Desk-Bound Developers

As developers, we spend countless hours in front of our screens, shoulders hunched, eyes strained, and bodies static. This sedentary lifestyle takes a toll on our physical well-being over time. Through my own journey balancing coding and physical health, I've discovered that targeted yoga practices can be remarkably effective in counteracting the negative effects of desk work.

## The Developer's Physical Dilemma

Before diving into solutions, let's acknowledge the common physical challenges developers face:

- Forward head posture from looking at screens
- Rounded shoulders and upper back
- Tight hip flexors from prolonged sitting
- Wrist strain from typing
- Eye fatigue from screen glare

These issues don't just cause discomfort—they can lead to chronic problems like repetitive strain injury, thoracic outlet syndrome, and persistent back pain.

## Mindful Micro-Breaks

The first practice isn't about complex poses but rather building awareness. Set a timer for every 45 minutes of coding and take a 2-minute yoga break:

1. **Seated Mountain Pose**: Sit tall, align your spine, draw shoulders back and down
2. **Neck Releases**: Gentle head tilts from side to side
3. **Wrist Circles**: Rotate wrists 5 times in each direction
4. **Eye Palming**: Rub hands together, place warm palms over closed eyes

These micro-interventions help reset your posture and prevent the accumulation of tension throughout your workday.

## Morning Energizing Sequence (10 minutes)

Start your day with this sequence to create space in your body before sitting down to code:

1. **Cat-Cow Flow**: 5 rounds of spinal flexion and extension
2. **Downward Dog to Plank**: Alternating between these poses builds shoulder strength
3. **Gentle Backbends**: Cobra or Sphinx pose to counteract forward posture
4. **Standing Side Bends**: Create space in the intercostal muscles
5. **Mountain Pose**: Set postural intention for the day

## Evening Recovery Practice (15 minutes)

After a day of coding, this sequence helps release accumulated tension:

1. **Child's Pose**: Opens the back while being restorative
2. **Thread the Needle**: Releases tension in the upper back and shoulders
3. **Supine Twist**: Neutralizes the spine and releases lower back
4. **Legs Up the Wall**: Inverts the body's fluid systems and relieves tired legs
5. **Savasana**: 3-5 minutes of complete relaxation to integrate benefits

## Wrist and Hand Therapy

Our hands and wrists do enormous work as developers. These practices help maintain their health:

1. **Hand Spread**: Extend fingers wide, then make a fist, repeat 10 times
2. **Finger Stretches**: Gently pull back on each finger
3. **Wrist Extension and Flexion**: Supported stretches in both directions
4. **Eagle Arms**: Wrapped arms create release in wrists, forearms and shoulders

## The Mental Component

Beyond physical benefits, these yoga practices offer developers something equally valuable: mental clarity. Brief moments away from the logical, analytical coding mindset allow the brain to process information differently. This context-switching often leads to breakthroughs on stubborn problems when you return to your code.

## Getting Started

You don't need special equipment or previous yoga experience to begin. A simple desk-side practice can start with:
- Setting reminders for posture checks
- Practicing the micro-breaks described above
- Gradually adding longer sequences as you become comfortable

As a developer who integrated these practices into my routine, I've experienced significant improvements in comfort, focus, and overall wellbeing. The body you code with is your most important tool—maintaining it should be considered part of your professional skill set.
        `
        },
        'space-exploration': {
                author: 'Hasyen Patel',
                content: `
# The New Era of Space Exploration

We stand at the threshold of what may be remembered as humanity's greatest period of space exploration. After decades of relative stagnation following the Apollo era, a renaissance in space technology and ambition is underway, driven by both traditional space agencies and revolutionary private companies.

## The Commercial Space Revolution

SpaceX has fundamentally transformed the economics of space access. The company's achievements represent a paradigm shift:

- **Reusable Rockets**: The Falcon 9's routine landings have slashed launch costs
- **Starship Development**: Promising fully reusable heavy-lift capability
- **Starlink Constellation**: Demonstrating commercial viability of large satellite networks

Other players like Blue Origin, Rocket Lab, and Relativity Space are pushing innovation in their own domains. This competitive landscape has driven down costs while accelerating technological development.

## NASA's Artemis Program

Returning to the Moon has evolved from a distant goal to an active program:

- **Artemis I**: The successful uncrewed test flight around the Moon
- **Gateway Station**: Plans for a lunar orbital platform
- **Sustainable Presence**: Unlike Apollo, Artemis aims for permanent infrastructure
- **Stepping Stone to Mars**: Developing technologies and experience for deeper space missions

The international partnerships forming around Artemis represent a new model of collaborative space exploration, with contributions from ESA, JAXA, CSA, and other agencies.

## Mars: The Next Frontier

The red planet continues to be humanity's most compelling destination beyond the Moon:

- **Perseverance and Ingenuity**: Demonstrating advanced surface operations
- **Sample Return Mission**: The complex multi-mission plan to bring Martian samples to Earth
- **SpaceX Mars Plans**: Ambitious visions of Starship missions establishing initial human presence
- **International Efforts**: Including China's Tianwen missions and future European contributions

The scientific questions driving Mars exploration—particularly the search for evidence of past or present life—represent some of humanity's most profound inquiries.

## Transformative Space Technologies

Beyond the headline missions, several technologies are quietly revolutionizing our capabilities:

- **Small Satellites**: Enabling more participants and novel mission designs
- **Nuclear Propulsion**: NASA's renewed investment in nuclear thermal propulsion
- **In-Situ Resource Utilization**: Learning to "live off the land" on other worlds
- **Advanced Life Support**: Closed-loop systems essential for long-duration missions

## The Astronomy Revolution

Space-based observatories are transforming our understanding of the cosmos:

- **James Webb Space Telescope**: Revealing unprecedented details of distant galaxies and exoplanets
- **Roman Space Telescope**: Set to further our understanding of dark energy
- **Future Observatories**: Including missions to detect gravitational waves from space

Each of these instruments extends our cosmic perspective and grounds space exploration in foundational science.

## Philosophical Implications

As technical capabilities advance, profound questions emerge:

- **Planetary Protection**: Balancing exploration with responsible stewardship
- **Space Resources**: Developing ethical frameworks for extraterrestrial mining
- **Long-term Settlement**: Considering the societal aspects of permanent outposts

## Looking Forward

The next decade promises unprecedented activities in space—multiple Moon landings, sample returns from across the solar system, new space stations, and potentially the first humans on Mars. More importantly, the democratization of space access means more voices, perspectives, and approaches to solving the immense challenges of becoming a spacefaring civilization.

For those of us observing and participating in this new era, the privilege is extraordinary—we are witnessing humanity's first tentative steps toward becoming a multi-planetary species. The challenges remain immense, but for the first time in generations, the trajectory is clearly upward.
        `
        },
        'ai-revolution': {
                author: 'Hasyen Patel',
                content: `
# The AI Revolution in Creative Industries

Artificial intelligence has quietly transformed from a scientific curiosity to a fundamental creative force across multiple industries. As someone straddling both technical and creative disciplines, I've had a front-row seat to this remarkable evolution. The integration of AI into creative workflows represents not just technological progress but a fundamental shift in how we think about human creativity itself.

## Redefining Animation Production

The animation industry has been revolutionized by AI in ways both visible and behind-the-scenes:

- **Character Animation**: Tools like DeepMotion can transform simple video into sophisticated character movements
- **In-betweening**: AI now generates intermediate frames, dramatically reducing the labor of animation
- **Style Transfer**: Algorithms can apply the visual aesthetic of one animation to another
- **Procedural Generation**: AI creates varied environments, crowds, and secondary effects

Major studios have integrated these technologies while maintaining their artistic vision. The result isn't replacement of animators but amplification of their capabilities—allowing more ambitious projects with the same resources.

## Music Production and Generation

AI's impact on music creation spans the spectrum from subtle assistance to standalone generation:

- **Intelligent Mixing**: Systems that can balance elements and suggest processing
- **Sample Generation**: Creating novel sounds beyond traditional synthesis
- **Compositional Assistance**: Suggesting chord progressions and melodic variations
- **Complete Generation**: Services producing royalty-free music based on emotional parameters

The most interesting developments occur at the human-AI boundary. Artists like Holly Herndon have pioneered collaborative approaches, treating AI as a band member with its own creative voice rather than merely a tool.

## Visual Arts and Design

Perhaps no creative field has been more visibly transformed than visual arts:

- **Text-to-Image Generation**: Systems like DALL-E, Midjourney and Stable Diffusion creating images from descriptions
- **Style Adaptation**: Allowing artists to work in varied visual languages
- **Concept Exploration**: Rapidly iterating on visual ideas before final execution
- **Design Automation**: Generating variations on themes within brand guidelines

The impact extends beyond digital arts—physical painters now use AI for concept development, while sculptors explore forms generated by algorithms trained on historical works.

## Writing and Narrative Construction

Text generation has advanced at a breathtaking pace:

- **Assisted Writing**: Suggesting continuations, alternative phrasings, and style adjustments
- **Plot Development**: Helping authors explore narrative branches and character interactions
- **Research Synthesis**: Summarizing and connecting relevant information
- **Dialogue Generation**: Creating convincing character voices and interactions

Authors like Robin Sloan have developed "augmented writing" approaches, using AI to overcome creative blocks while maintaining their distinctive voice and intent.

## Ethical Considerations

The AI creative revolution brings profound questions:

- **Attribution and Ownership**: Who can claim credit for AI-assisted or AI-generated work?
- **Training Data Ethics**: How to address the use of artists' work in training datasets
- **Economic Impact**: How creative industries adapt to changing skill requirements
- **Authenticity**: What it means for work to be "human" in an AI-augmented world

These questions aren't merely theoretical—they're being actively litigated and negotiated across the creative economy.

## The Collaborative Future

The most promising direction isn't replacement but collaboration—systems designed explicitly for human-AI creativity:

- **Augmented Tools**: Software that learns individual creative patterns and extends them
- **Iterative Feedback Loops**: Where human and AI alternately refine outputs
- **Creative Exploration**: AI as a method to discover unexpected directions
- **Technical Liberation**: Handling technical aspects while humans focus on higher-level decisions

## Personal Reflections

In my own work spanning animation, music, and visual art, AI tools have become indispensable partners in the creative process. They've expanded my capabilities while challenging me to more clearly define my aesthetic intent and human perspective.

The AI revolution in creative fields isn't about replacing human creativity—it's about expanding its possibilities. The most exciting developments aren't the tools themselves, but how they're enabling new forms of expression that neither humans nor AI could achieve independently. As these technologies mature, the distinction between "AI-generated" and "human-created" will likely become less relevant than the quality and impact of the work itself.
        `
        }
};

export default function BlogPost() {
        const params = useParams();
        const [post, setPost] = useState<BlogPost | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                // Get the blog ID from params
                const id = params.id as string;

                // For demonstration only - in a real app, this would be an API call
                // Directly using the data from our main file
                try {
                        const blogPost = blogPosts.find(post => post.id === id);

                        if (blogPost) {
                                // Add the content from our fake content store if available
                                const blogWithContent = {
                                        ...blogPost,
                                        content: blogContents[id]?.content || "Content coming soon...",
                                        author: blogContents[id]?.author || "Hasyen Patel"
                                };
                                setPost(blogWithContent);
                        }

                        setLoading(false);
                } catch (err) {
                        console.error("Error loading blog post:", err);
                        setLoading(false);
                }
        }, [params.id]);

        // Format date to be more readable
        const formatDate = (dateString: string) => {
                const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
        };

        // Get a color class based on category
        const getCategoryColor = (category: string) => {
                switch (category?.toLowerCase()) {
                        case 'development':
                                return 'bg-blue-500';
                        case 'tech':
                                return 'bg-purple-500';
                        case 'animation':
                                return 'bg-green-500';
                        case 'music':
                                return 'bg-yellow-500';
                        case 'nature':
                                return 'bg-emerald-500';
                        case 'health':
                                return 'bg-red-500';
                        case 'ai':
                                return 'bg-indigo-500';
                        case 'space':
                                return 'bg-blue-700';
                        case 'personal':
                                return 'bg-amber-500';
                        case 'data':
                                return 'bg-cyan-500';
                        case 'books':
                                return 'bg-rose-500';
                        default:
                                return 'bg-gray-500';
                }
        };

        // Simple markdown-like rendering function
        const renderContent = (content: string) => {
                if (!content) return null;

                const lines = content.split('\n');
                const result: JSX.Element[] = [];

                lines.forEach((line, index) => {
                        // Headers
                        if (line.startsWith('# ')) {
                                result.push(<h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>);
                        } else if (line.startsWith('## ')) {
                                result.push(<h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>);
                        } else if (line.startsWith('### ')) {
                                result.push(<h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>);
                        }
                        // Lists
                        else if (line.startsWith('- ')) {
                                result.push(<li key={index} className="ml-6 list-disc my-1">{line.substring(2)}</li>);
                        } else if (line.startsWith('**') && line.endsWith('**')) {
                                // Bold text as list item header (special case for formatted lists)
                                const boldText = line.substring(2, line.length - 2);
                                result.push(<p key={index} className="font-bold my-1">{boldText}:</p>);
                        }
                        // Paragraphs (non-empty lines that aren't headers or list items)
                        else if (line.trim() !== '') {
                                result.push(<p key={index} className="my-4 leading-relaxed">{line}</p>);
                        }
                });

                return result;
        };

        return (
                <div className="min-h-screen bg-white dark:bg-black">
                        <Navbar />

                        <main className="pt-20 pb-16">
                                {loading ? (
                                        <div className="container-custom max-w-4xl py-20 text-center">
                                                <div className="animate-pulse">
                                                        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-6"></div>
                                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mb-12"></div>
                                                        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
                                                        <div className="space-y-3">
                                                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                                                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                                                        </div>
                                                </div>
                                        </div>
                                ) : !post ? (
                                        <div className="container-custom max-w-4xl py-20 text-center">
                                                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Blog Post Not Found</h1>
                                                <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                                                <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        Back to Blog
                                                </Link>
                                        </div>
                                ) : (
                                        <article className="container-custom max-w-4xl">
                                                {/* Back to blog link */}
                                                <Link href="/blog" className="inline-flex items-center text-primary dark:text-primary-dark font-medium mb-6 hover:underline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        Back to Blog
                                                </Link>

                                                {/* Header with metadata */}
                                                <header className="mb-8">
                                                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                                                {post.title}
                                                        </h1>

                                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                                                                <span className="flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                                        </svg>
                                                                        {post.readTime}
                                                                </span>
                                                                <span className="flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                                        </svg>
                                                                        {formatDate(post.date)}
                                                                </span>
                                                                <span className="flex items-center">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                                        </svg>
                                                                        {post.author}
                                                                </span>
                                                                <span className={`px-3 py-1 rounded-full text-xs text-white ${getCategoryColor(post.category)}`}>
                                                                        {post.category}
                                                                </span>
                                                        </div>
                                                </header>

                                                {/* Featured image */}
                                                {post.imageUrl && (
                                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
                                                                <div
                                                                        className="w-full h-full bg-cover bg-center"
                                                                        style={{
                                                                                backgroundImage: `url(${post.imageUrl})`,
                                                                        }}
                                                                />
                                                        </div>
                                                )}

                                                {/* Content */}
                                                <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        className="prose prose-lg max-w-none dark:prose-invert"
                                                >
                                                        {renderContent(post.content || '')}
                                                </motion.div>
                                        </article>
                                )}
                        </main>

                        <Footer />
                </div>
        );
} 