// Web Vitals tracking for performance monitoring
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
        // In development, log to console
        if (process.env.NODE_ENV === 'development') {
                console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
                return;
        }

        // In production, you could send to your analytics service
        // Example: Google Analytics 4
        if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', metric.name, {
                        event_category: 'Web Vitals',
                        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                        event_label: metric.id,
                        non_interaction: true,
                });
        }
}

export function trackWebVitals() {
        try {
                onCLS(sendToAnalytics);
                onINP(sendToAnalytics);
                onFCP(sendToAnalytics);
                onLCP(sendToAnalytics);
                onTTFB(sendToAnalytics);
        } catch (err) {
                console.error('Error tracking Web Vitals:', err);
        }
}

// Performance observer for custom metrics
export function observePerformance() {
        if (typeof window === 'undefined') return;

        // Observe long tasks (> 50ms)
        if ('PerformanceObserver' in window) {
                try {
                        const observer = new PerformanceObserver((list) => {
                                for (const entry of list.getEntries()) {
                                        if (entry.duration > 50) {
                                                console.warn(`Long task detected: ${entry.duration}ms`);
                                        }
                                }
                        });
                        observer.observe({ entryTypes: ['longtask'] });
                } catch (e) {
                        // PerformanceObserver not supported
                }
        }
} 