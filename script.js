document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bouncingVideo');
    const container = document.querySelector('.container');
    
    // Initial position
    let x = Math.random() * (window.innerWidth - video.offsetWidth);
    let y = Math.random() * (window.innerHeight - video.offsetHeight);
    
    // Speed (pixels per frame) - reduced for slower movement
    let speedX = 1;
    let speedY = 0.8;
    
    // Update video position
    function updatePosition() {
        // Get current video dimensions
        const videoWidth = video.offsetWidth;
        const videoHeight = video.offsetHeight;
        
        // Update position
        x += speedX;
        y += speedY;
        
        // Boundary checks and bounce
        if (x + videoWidth > window.innerWidth) {
            x = window.innerWidth - videoWidth;
            speedX = -speedX;
        } else if (x < 0) {
            x = 0;
            speedX = -speedX;
        }
        
        if (y + videoHeight > window.innerHeight) {
            y = window.innerHeight - videoHeight;
            speedY = -speedY;
        } else if (y < 0) {
            y = 0;
            speedY = -speedY;
        }
        
        // Apply position to video
        video.style.left = x + 'px';
        video.style.top = y + 'px';
        
        // Continue animation
        requestAnimationFrame(updatePosition);
    }
    
    // Make sure video metadata is loaded before starting animation
    video.addEventListener('loadedmetadata', function() {
        // Start the animation
        updatePosition();
    });
});
