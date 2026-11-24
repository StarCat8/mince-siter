/* shared nav + starfield — included in every page */

// ── Starfield ──────────────────────────────────────────────
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  function init() {
    stars = Array.from({ length: 260 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.004,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.a = Math.max(0.05, Math.min(1, s.a + s.da));
      if (s.a <= 0.05 || s.a >= 1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a.toFixed(2)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  window.addEventListener('resize', () => { resize(); init(); });
})();

// ── Active nav link ────────────────────────────────────────
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active');
  });
})();

// ── Smooth scroll (for in-page anchors) ───────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
