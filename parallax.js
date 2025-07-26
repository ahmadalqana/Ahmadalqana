document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollSpeed = 0.3; // Adjust scroll speed (0.1 = slowest, 0.9 = fastest)

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translate3d(0, ${scrollPosition * scrollSpeed}px, 0)`;
    });

    // Mobile touch device detection
    if ('ontouchstart' in window) {
        parallaxBg.style.backgroundAttachment = 'scroll';
    }
});