import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../data/blogData';
import type { BlogPost } from '../../data/blogData';

// This function tells Next.js which dynamic routes to pre-build
export async function generateStaticParams() {
        return blogPosts.map((post) => ({
                id: post.id,
        }));
}

// This function generates metadata for each page
export async function generateMetadata({ params }: { params: { id: string } }) {
        const post = blogPosts.find((post) => post.id === params.id);

        if (!post) {
                return {
                        title: 'Blog Post Not Found',
                };
        }

        return {
                title: `${post.title} | Hasyen Patel`,
                description: post.excerpt,
        };
}

// Get the blog post data
function getBlogPost(id: string): BlogPost | undefined {
        return blogPosts.find((post) => post.id === id);
}

export default function BlogPost({ params }: { params: { id: string } }) {
        const post = getBlogPost(params.id);

        if (!post) {
                notFound();
        }

        // Format date to be more readable
        const formatDate = (dateString: string) => {
                const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
        };

        // Get a background color based on category
        const getCategoryColor = (category: string) => {
                switch (category.toLowerCase()) {
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
                                result.push(<h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{line.substring(2)}</h1>);
                        } else if (line.startsWith('## ')) {
                                result.push(<h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{line.substring(3)}</h2>);
                        } else if (line.startsWith('### ')) {
                                result.push(<h3 key={index} className="text-xl font-bold mt-5 mb-2 text-gray-900 dark:text-white">{line.substring(4)}</h3>);
                        }
                        // Lists
                        else if (line.startsWith('- ')) {
                                result.push(<li key={index} className="ml-6 list-disc my-1 text-gray-800 dark:text-gray-200">{line.substring(2)}</li>);
                        } else if (line.startsWith('**') && line.endsWith('**')) {
                                // Bold text as list item header (special case for formatted lists)
                                const boldText = line.substring(2, line.length - 2);
                                result.push(<p key={index} className="font-bold my-1 text-gray-900 dark:text-white">{boldText}:</p>);
                        }
                        // Paragraphs (non-empty lines that aren't headers or list items)
                        else if (line.trim() !== '') {
                                result.push(<p key={index} className="my-4 leading-relaxed text-gray-800 dark:text-gray-200">{line}</p>);
                        }
                });

                return result;
        };

        return (
                <div className="min-h-screen bg-white dark:bg-black">
                        <div className="container-custom max-w-4xl py-20">
                                {/* Back to blog link */}
                                <Link
                                        href="/#blog"
                                        className="inline-flex items-center text-primary dark:text-primary-dark hover:underline mb-8"
                                >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H13a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L5.293 6.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
                                        </svg>
                                        Back to Blog
                                </Link>

                                {/* Hero image */}
                                {post.imageUrl && (
                                        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                                                <div
                                                        className="w-full h-full bg-cover bg-center"
                                                        style={{
                                                                backgroundImage: `url(${post.imageUrl})`,
                                                        }}
                                                />
                                        </div>
                                )}

                                {/* Post metadata */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <span className={`px-3 py-1 rounded-full text-sm text-white ${getCategoryColor(post.category)}`}>
                                                {post.category}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                {formatDate(post.date)}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                {post.readTime}
                                        </span>
                                </div>

                                {/* Post title */}
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
                                        {post.title}
                                </h1>

                                {/* Post excerpt */}
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        {post.excerpt}
                                </p>

                                {/* Post content */}
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                        {post.content ? (
                                                <div className="whitespace-pre-wrap">
                                                        {renderContent(post.content)}
                                                </div>
                                        ) : (
                                                <div className="text-gray-600 dark:text-gray-400 text-center py-12">
                                                        <p className="text-lg mb-4">Content coming soon!</p>
                                                        <p>This blog post is currently being written. Check back later for the full article.</p>
                                                </div>
                                        )}
                                </div>

                                {/* Back to blog link at bottom */}
                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                        <Link
                                                href="/#blog"
                                                className="inline-flex items-center text-primary dark:text-primary-dark hover:underline"
                                        >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H13a1 1 0 110 2H2.586l3.707 3.707a1 1 0 01-1.414 1.414l-5.414-5.414a1 1 0 010-1.414L5.293 6.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
                                                </svg>
                                                Back to Blog
                                        </Link>
                                </div>
                        </div>
                </div>
        );
} 