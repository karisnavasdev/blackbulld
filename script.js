/**
 * BULLION — edit these before launch
 */
const CONFIG = {
  contractAddress: "bullpump",
  links: {
    buyPrimary: "https://pump.fun",
    buyAlt: "https://pump.fun",
    dexscreenerPage: "https://dexscreener.com/solana/bullpump",
    dexscreenerEmbed: "https://dexscreener.com/solana/bullpump?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15",
    twitter: "https://x.com/TrillionelonX",
    
  },
};

const $ = (sel) => document.querySelector(sel);

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch {
    showToast("Copy failed — select manually");
  }
}

function initLinks() {
  const { links, contractAddress } = CONFIG;

  const caEl = $("#contractAddress");
  if (caEl) caEl.textContent = contractAddress;

  const buyUrls = [links.buyPrimary, links.buyAlt].filter(Boolean);
  const buyHref = buyUrls[0] || "#";

  ["#buyPrimaryBtn", "#buySecondaryBtn"].forEach((sel) => {
    const el = $(sel);
    if (el) el.href = buyHref;
  });

  const dexBtn = $("#dexBtn");
  if (dexBtn) dexBtn.href = links.dexscreenerPage || "#";

  const twitterBtn = $("#twitterBtn");
  if (twitterBtn) twitterBtn.href = links.twitter || "#";

  const telegramBtn = $("#telegramBtn");
  if (telegramBtn) telegramBtn.href = links.telegram || "#";

  const embed = $("#dexEmbed");
  const placeholder = $("#chartPlaceholder");
  if (embed && links.dexscreenerEmbed) {
    embed.src = links.dexscreenerEmbed;
    embed.classList.add("is-visible");
    if (placeholder) placeholder.classList.add("is-hidden");
  }
}

function initCopyButtons() {
  const copy = () => {
    const ca = CONFIG.contractAddress;
    if (ca.startsWith("TBA")) {
      showToast("Contract not set yet — edit script.js");
      return;
    }
    copyText(ca);
  };

  $("#copyCaBtn")?.addEventListener("click", copy);
  $("#copyCaBtn2")?.addEventListener("click", copy);
}

function initHeroVideo() {
  const video = $("#heroVideo");
  const scenes = $("#heroScenes");
  if (!video || !scenes) return;

  const activateVideo = () => {
    video.classList.add("is-active");
    scenes.classList.add("is-hidden");
  };

  video.addEventListener("canplay", activateVideo, { once: true });
  video.addEventListener("loadeddata", activateVideo, { once: true });

  video.play().catch(() => {
    /* autoplay blocked or file missing — keep CSS scenes */
  });

  video.addEventListener("error", () => {
    video.classList.remove("is-active");
    scenes.classList.remove("is-hidden");
  });
}

function initMoneyRain() {
  const container = $("#moneyRain");
  if (!container) return;

  for (let i = 0; i < 24; i++) {
    const flake = document.createElement("div");
    flake.className = "bill-flake";
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDuration = `${4 + Math.random() * 6}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(flake);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLinks();
  initCopyButtons();
  initHeroVideo();
  initMoneyRain();
});

