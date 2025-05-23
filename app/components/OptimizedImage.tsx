'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
        priority?: boolean;
        placeholder?: 'blur' | 'empty';
        blurDataURL?: string;
}

export default function OptimizedImage({
        src,
        alt,
        width,
        height,
        className = '',
        priority = false,
        placeholder = 'empty',
        blurDataURL,
}: OptimizedImageProps) {
        const [isLoading, setIsLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        // Generate a simple blur placeholder if none provided
        const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/xAAhEQABBAEDBQAAAAAAAAAAAAABABECITFhkfCRobHB0eH/2gAMAwEAAhEDEQA/AO5jB6PgmJ8ERADjUHIzRoYbmfgV4d4U/t2lXPktx+w+lH3LAD+gJ8E9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKsE9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKsE9bWt5ZF5vDOOkAQ0KqkbW9JOk5S7S7H8rGf6yFhKs';

        if (hasError) {
                return (
                        <div
                                className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}
                                style={{ width, height }}
                                role="img"
                                aria-label={`Failed to load image: ${alt}`}
                        >
                                <span className="text-gray-500 text-sm">Image unavailable</span>
                        </div>
                );
        }

        return (
                <div className={`relative overflow-hidden ${className}`}>
                        <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                priority={priority}
                                placeholder={placeholder}
                                blurDataURL={blurDataURL || defaultBlurDataURL}
                                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                onLoadingComplete={() => setIsLoading(false)}
                                onError={() => setHasError(true)}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {isLoading && (
                                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                        )}
                </div>
        );
} 