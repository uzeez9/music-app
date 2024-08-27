document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
      const nextScreen = button.getAttribute('data-next');
      changeScreen(nextScreen);
    });
  });
  
  function changeScreen(screenClass) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.querySelector(`.${screenClass}`).classList.add('active');
  }
  