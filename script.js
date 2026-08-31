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
