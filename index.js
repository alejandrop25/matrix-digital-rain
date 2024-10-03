//setup canvas
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 20;

//array das colunas & armazena a posiçao vertical atual de cada
const col = Array.from({length: 100}).fill(1);

const matrix = () => {
  //fundo
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //caracteres
  ctx.fillStyle = '#28f10f';
  ctx.font = `20px monospace`;
  // y-posiçao vertical atual  x-indice correspondente
  col.forEach((y, x) => {
    const text = char[Math.floor(Math.random() * char.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);
    col[x] = (y * fontSize > canvas.height && Math.random() > 0.9) ? 0 : y + 1;
   });
};

const animacao = () => {
  matrix();
  requestAnimationFrame(animacao);
};

animacao();
