document.addEventListener('DOMContentLoaded', function () {
    const showButtons = document.querySelectorAll('.show-details');
  
    showButtons.forEach(button => {
      button.addEventListener('click', function () {
        const details = this.parentNode.querySelector('.details');
        details.style.display = (details.style.display === 'block') ? 'none' : 'block';
      });
    });
  });
  