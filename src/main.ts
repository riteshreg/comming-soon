import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app")!;

root.innerHTML = `
  <div class="page">
    <div class="bg-shape" aria-hidden="true"></div>
    <main class="hero" role="main" aria-labelledby="coming-title">
      <div class="logo" aria-hidden="true">CS</div>
      <div class="overline">Launching soon</div>
      <h1 id="coming-title">Coming Soon</h1>
      <div class="divider" aria-hidden="true"></div>
      <p class="tagline">We're crafting something delightful. A little patience — great things are on their way.</p>

  <p class="sub">🙈</p>
    </main>
  </div>
`;

// small runtime flourish: add a class after paint to trigger any CSS transitions if needed
requestAnimationFrame(() => {
  document.documentElement.classList.add("is-ready");
});

export {};
