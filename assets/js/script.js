window.addEventListener("load", () => {
  const emojis = document.querySelectorAll(".emoji");

  emojis.forEach((emoji) => {
    // Récupère la taille réelle de l'emoji une fois rendu
    const rect = emoji.getBoundingClientRect();
    const emojiWidth = rect.width;
    const emojiHeight = rect.height;

    // Taille de l'écran
    const maxWidth = window.innerWidth - emojiWidth;
    const maxHeight = window.innerHeight - emojiHeight;

    // Génère une position aléatoire qui garde l'emoji dans l'écran
    const posX = Math.random() * maxWidth;
    const posY = Math.random() * maxHeight;

    emoji.style.left = `${posX}px`;
    emoji.style.top = `${posY}px`;
  });
});

// Effet parallaxe quand on bouge la souris
document.addEventListener("mousemove", (e) => {
  const emojis = document.querySelectorAll(".emoji");
  const { innerWidth, innerHeight } = window;

  emojis.forEach((emoji, index) => {
    const offsetX = ((e.clientX / innerWidth) - 0.5) * (20 + index * 15);
    const offsetY = ((e.clientY / innerHeight) - 0.5) * (20 + index * 15);

    emoji.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});
