// Add this script to remove the loading class after the page loads

document.addEventListener('DOMContentLoaded', function() {
  // Wait for all content to load
  window.addEventListener('load', function() {
    // Remove loading class from body or any container that has it
    document.body.classList.remove('loading');
    
    // Alternative: if loading class is on a different element
    // document.querySelector('.your-container').classList.remove('loading');
  });
  
  // Fallback: Remove loading class after 5 seconds even if content isn't fully loaded
  setTimeout(function() {
    document.body.classList.remove('loading');
  }, 5000);
});
