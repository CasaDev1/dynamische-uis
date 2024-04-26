document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const colors = ['green', 'red', 'blue'];
  
    colors.forEach(color => {
      const buttons = document.createElement('button');
      buttons.textContent = color;
      buttons.style.backgroundColor = color;
      buttons.addEventListener('click', function() {
        document.body.style.backgroundColor = color;
      });
      container.appendChild(buttons);
    });
  });