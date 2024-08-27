// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nextButtons = document.querySelectorAll('.next-btn');
    let touchstartX = 0;
    let touchendX = 0;
    const minSwipeDistance = 50; // Minimum distance in pixels to detect a swipe
  
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nextScreenClass = button.getAttribute('data-next');
        showScreen(nextScreenClass);
      });
    });
  
    function showScreen(screenClass) {
      const allScreens = document.querySelectorAll('.screen');
      allScreens.forEach(screen => {
        screen.classList.remove('active');
      });
  
      const nextScreen = document.querySelector(`.${screenClass}`);
      if (nextScreen) {
        nextScreen.classList.add('active');
      }
    }
  
    // Function to handle swipe navigation
    function handleSwipeNavigation(direction) {
      const activeScreen = document.querySelector('.screen.active');
      let nextScreenClass;
  
      if (direction === 'left') {
        // Navigate to the next screen (right swipe)
        if (activeScreen.classList.contains('welcome-screen')) {
          nextScreenClass = 'dashboard-screen';
        } else if (activeScreen.classList.contains('dashboard-screen')) {
          nextScreenClass = 'music-player-screen';
        }
      } else if (direction === 'right') {
        // Navigate to the previous screen (left swipe)
        if (activeScreen.classList.contains('music-player-screen')) {
          nextScreenClass = 'dashboard-screen';
        } else if (activeScreen.classList.contains('dashboard-screen')) {
          nextScreenClass = 'welcome-screen';
        }
      }
  
      if (nextScreenClass) {
        showScreen(nextScreenClass);
      }
    }
  
    // Swipe detection event listeners
    document.addEventListener('touchstart', (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });
  
    document.addEventListener('touchmove', (e) => {
      touchendX = e.changedTouches[0].screenX;
    });
  
    document.addEventListener('touchend', () => {
      if (touchendX < touchstartX - minSwipeDistance) {
        handleSwipeNavigation('left');
      } else if (touchendX > touchstartX + minSwipeDistance) {
        handleSwipeNavigation('right');
      }
    });
  
    // Light/Dark mode toggle (if needed)
    const toggleButton = document.querySelector('.menu-icon');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  });
  