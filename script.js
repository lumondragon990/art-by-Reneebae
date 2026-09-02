// Reneebae — gallery lightbox + small touches

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbDesc = document.getElementById("lightbox-desc");
const closeBtn = lightbox.querySelector(".lightbox-close");
let lastFocused = null;

function openLightbox(frame) {
  const img = frame.querySelector("img");
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbTitle.textContent = frame.dataset.title || "";
  lbDesc.textContent = frame.dataset.desc || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lastFocused = document.activeElement;
  closeBtn.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lbImg.src = "";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".frame").forEach((frame) => {
  frame.querySelector(".frame-btn").addEventListener("click", () => openLightbox(frame));
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ~ MySpace touches ~
// twinkling sparkles in the hero
const hero = document.getElementById("hero");
if (hero) {
  const spots = [
    [6, 12], [14, 78], [22, 30], [30, 88], [42, 8], [55, 70],
    [60, 20], [72, 92], [80, 40], [88, 66], [16, 55], [68, 50]
  ];
  spots.forEach(([top, left], i) => {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.textContent = i % 3 === 0 ? "\u2726" : "\u2727"; // ✦ ✧
    s.style.top = top + "%";
    s.style.left = left + "%";
    s.style.animationDelay = (i * 0.23) + "s";
    hero.appendChild(s);
  });
}

// visitor counter (grows a little every visit, like the old days)
const counter = document.getElementById("visitor-count");
if (counter) {
  let n = 1337;
  try {
    n = parseInt(localStorage.getItem("rb-visits") || "1337", 10) + Math.floor(Math.random() * 3) + 1;
    localStorage.setItem("rb-visits", String(n));
  } catch (e) { /* private browsing — keep default */ }
  counter.textContent = String(n).padStart(4, "0");
}
