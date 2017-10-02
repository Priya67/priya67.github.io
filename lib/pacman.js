const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

context.strokeStyle = 'white';
context.strokeRect(100, 100, 800, 500);
