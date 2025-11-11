// Scroll-based animation triggers
export const setupScrollTriggers = (callback) => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollPercent = scrollPosition / (document.documentElement.scrollHeight - windowHeight);

        callback(scrollPercent * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
};

// Get section visibility
export const getSectionVisibility = (element) => {
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;

    const visibleTop = Math.max(0, -rect.top);
    const visibleBottom = Math.min(elementHeight, windowHeight - rect.top);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    return visibleHeight / elementHeight;
};