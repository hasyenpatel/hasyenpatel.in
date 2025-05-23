import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Fallback component for loading states
const LoadingFallback = ({ height = "400px" }: { height?: string }) => (
        <div
                className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"
                style={{ height }}
        >
                <div className="text-gray-500 dark:text-gray-400">Loading...</div>
        </div>
);

// Create lazy-loaded versions of heavy components
export const LazyHobbies = dynamic(() => import('./Hobbies'), {
        loading: () => <LoadingFallback height="500px" />,
        ssr: false, // Disable SSR for 3D components
});

export const LazyMusic = dynamic(() => import('./Music'), {
        loading: () => <LoadingFallback height="600px" />,
        ssr: false,
});

export const LazyBooks = dynamic(() => import('./Books'), {
        loading: () => <LoadingFallback height="600px" />,
        ssr: false,
});

export const LazyContact = dynamic(() => import('./Contact'), {
        loading: () => <LoadingFallback height="500px" />,
        ssr: false,
});

// Wrapper component with Suspense
export const LazyWrapper = ({
        children,
        fallback
}: {
        children: React.ReactNode;
        fallback?: React.ReactNode;
}) => (
        <Suspense fallback={fallback || <LoadingFallback />}>
                {children}
        </Suspense>
); 