const emojis = ['🌸','🌺','🌹','✨','💕','🌷'];
  const container = document.getElementById('petals');
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (6 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    p.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    container.appendChild(p);
  }
  document.addEventListener('click', (e) => {
    const h = document.createElement('div');
    h.className = 'heart-trail';
    h.textContent = ['💕','🌹','✨','💖','🌸'][Math.floor(Math.random()*5)];
    h.style.left = e.clientX - 10 + 'px';
    h.style.top = e.clientY - 10 + 'px';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 800);
  });