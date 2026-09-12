/**
 * ============================================================================
 * ROMANTIC LOVE NOTE WEBSITE - CORE LOGIC
 * Built for Alma & Alma ka Azaan ❤️
 * ============================================================================
 */

/* ============================================================================
 * 🛠️ CONFIGURATION - CUSTOMIZE EVERYTHING HERE!
 * Change these values anytime to personalize your website.
 * ============================================================================ */
const CONFIG = {
  // Names
  herName: "Alma",
  myName: "Alma ka Azaan",

  // 1. Anniversary / Relationship Start Date (For the elapsed timer)
  // Format: "YYYY-MM-DDTHH:MM:SS" (e.g., "2023-04-15T00:00:00")
  startDate: new Date("2023-04-15T00:00:00"),

  // 2. Future Reunion / Meeting Date (Insha'Allah in October)
  // Format: "YYYY-MM-DDTHH:MM:SS" (e.g., "2026-10-15T18:00:00")
  targetDate: new Date("2026-10-15T18:00:00"),

  // 3. Photo Captions (matches photos 1 through 5 in images/ directory)
  photoCaptions: [
    "One of my favorite moments ❤️",
    "Still one of my favorite pictures of you.",
    "My Princess Almaa",
    "The day I realized how lucky I am. 🌙",
    "Those beautiful eyes hold my entire world... Can't wait to make a million more memories with you. ♾️ ✨"
  ],

  // 4. Main Love Letter Paragraphs (You can edit or replace this text anytime)
  loveLetterParagraphs: [
    "To the one who holds my heart,",
    "I often wonder how to weave my feelings into words, for whenever I try, the words feel too small to hold the vastness of what you mean to me. <em>'Yeh sab words mein kaise samjhaun?'</em> You are not just someone I love; you have beautifully and unknowingly woven yourself into the very fabric of my thoughts, my smiles, and my tomorrows. Somewhere between our quiet moments, our silly fights, and our endless laughter, you became my extraordinary.",
    "It amazes me how, my sweet Laddu, you can make the most ordinary day feel like magic. Sometimes it is just a message, your voice, or a random silly thing you say that paints a smile on my face. <em>Tumhari chhoti-chhoti baatein mere liye bahut badi hain.</em> Your presence is a quiet comfort I cannot fully explain.",
    "My adorable Guddi, I love every shade of your soul—your beautiful expressions, your cute anger, your sudden quietness, and your unstoppable laughter. <em>Tum perfect ho isliye nahi ki tum mein koi kami nahi hai… tum perfect ho kyunki tum mere liye bilkul tum jaisi ho.</em>",
    "And yes, you are also my Papa—the one who manages to annoy me and make me smile in the exact same heartbeat! 😂❤️ With you, I never have to pretend; I can simply be me. <em>Kabhi kabhi tumhare saath kuch kehna zaroori nahi hota… bas tumhara hona hi kaafi hota hai.</em> I don't think I can ever fully explain this connection. Maybe it’s the comfort, or maybe it’s simply because, somewhere along the way, you became home to me.",
    "<em>Kehti hai duniya mohabbat sirf ek ehsaas hai,<br>par mujhe toh tum mein apni poori duniya nazar aati hai.</em>",
    "I don't just want the sunny days; I want to hold your hand through the storms too. I want to know your unspoken dreams and the fears you hide. <em>Kabhi kabhi thak jaana bhi allowed hai… aur jab tum thak jao, toh mere paas aa jaana.</em> No matter what the future holds or how many miles stand between us, I don't want distance to ever decide how close our hearts can be. <em>Mohabbat ka matlab sirf saath rehna nahi hota, kabhi kabhi door rehkar bhi kisi ko har pal apne paas mehsoos karna hota hai.</em>",
    "If you ever ask me what I love about you, the answer is simple yet endless: It's your smile, your voice, your crazy side, your caring heart. It's the way you make me miss you even when we just spoke. It is simply, entirely, beautifully <strong>you</strong>. <em>Tum meri zindagi ka woh khoobsurat hissa ho jise main kabhi 'just a part' nahi keh sakta.</em>",
    "My Laddu, my Guddi, my Papa… you are not just one feeling to me; you are a hundred different beautiful feelings living inside one person. Thank you for existing. Thank you for all the memories we share, and for all the chapters yet to be written. <em>Aur agar kabhi zindagi mujhse pooche ki meri sabse khoobsurat dua kya hai… toh main bas tumhara naam lunga.</em>",
    "I love you, not just in the grand moments, but in every 'kya kar rahe ho?' and 'khana khaya?' In every heartbeat that quietly whispers, <em>'Bas yahi ladki chahiye.'</em> ❤️"
  ],

  // 5. Audio Settings
  audioSrc: "audio/our-song.mp3",

  // 6. Birthday Lock Date (Unlocks September 16, 2026 at midnight)
  birthdayDate: new Date("2026-09-16T00:00:00")
};

/* ============================================================================
 * DOM ELEMENTS INITIALIZATION
 * ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initLandingScreenSequence();
  initScrollProgress();
  initAudioPlayer();
  initPhotoLightbox();
  initLoveLetter();
  initElapsedTimer();
  initCountdownTimer();
  initBirthdayLock();
  initSurpriseInteraction();
  initSecretHeartGame();
  initGiantHeartInteraction();

  // Dynamic Year in footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ============================================================================
 * 1. OPENING / LANDING SCREEN SEQUENCE
 * ============================================================================ */
function initLandingScreenSequence() {
  const line1 = document.getElementById("landing-line-1");
  const line2 = document.getElementById("landing-line-2");
  const line3 = document.getElementById("landing-line-3");
  const actionWrap = document.querySelector(".landing-action");
  const openBtn = document.getElementById("open-experience-btn");
  const landingScreen = document.getElementById("landing-screen");
  const mainExperience = document.getElementById("main-experience");

  // Paced dramatic entrance
  setTimeout(() => line1 && line1.classList.add("visible"), 400);
  setTimeout(() => line2 && line2.classList.add("visible"), 1700);
  setTimeout(() => line3 && line3.classList.add("visible"), 3100);
  setTimeout(() => actionWrap && actionWrap.classList.add("visible"), 4200);

  if (openBtn && landingScreen && mainExperience) {
    openBtn.addEventListener("click", (e) => {
      // Spawn heart burst around button
      spawnBurstParticles(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 18);

      // Attempt background music playback smoothly
      playAudioIfAvailable();

      // Transition out landing curtain
      landingScreen.classList.add("unlocked");
      mainExperience.classList.remove("hidden-initial");

      // Scroll smoothly to top of greeting
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    });
  }
}

/* ============================================================================
 * SCROLL PROGRESS INDICATOR
 * ============================================================================ */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/* ============================================================================
 * FLOATING AUDIO PLAYER & ERROR-SAFE FALLBACK
 * ============================================================================ */
let bgAudio = null;
let isAudioPlaying = false;

function initAudioPlayer() {
  bgAudio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("music-toggle-btn");
  const musicLabel = document.getElementById("music-label");

  if (!toggleBtn || !bgAudio) return;

  toggleBtn.addEventListener("click", () => {
    if (isAudioPlaying) {
      bgAudio.pause();
      isAudioPlaying = false;
      toggleBtn.classList.remove("is-playing");
      if (musicLabel) musicLabel.textContent = "Play Song";
    } else {
      playAudioIfAvailable();
    }
  });

  bgAudio.addEventListener("ended", () => {
    isAudioPlaying = false;
    toggleBtn.classList.remove("is-playing");
    if (musicLabel) musicLabel.textContent = "Replay Song";
  });

  bgAudio.addEventListener("error", () => {
    isAudioPlaying = false;
    toggleBtn.classList.remove("is-playing");
  });
}

function playAudioIfAvailable() {
  const toggleBtn = document.getElementById("music-toggle-btn");
  const musicLabel = document.getElementById("music-label");
  if (!bgAudio) return;

  const playPromise = bgAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isAudioPlaying = true;
        if (toggleBtn) toggleBtn.classList.add("is-playing");
        if (musicLabel) musicLabel.textContent = "Our Song 🎵";
      })
      .catch((err) => {
        // Graceful handling if file not found or browser restricted
        isAudioPlaying = false;
        if (toggleBtn) toggleBtn.classList.remove("is-playing");
        // Only show toast if user explicitly interacted with music toggle
        console.log("Audio not played (optional file):", err.message);
      });
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notification");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

/* ============================================================================
 * 3 & 14. PHOTO MEMORIES & LIGHTBOX
 * ============================================================================ */
function initPhotoLightbox() {
  const gallery = document.getElementById("photo-gallery");
  const modal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const backdrop = document.getElementById("lightbox-backdrop");

  if (!gallery || !modal || !lightboxImg || !lightboxCaption) return;

  // Open modal on card click
  const cards = gallery.querySelectorAll(".polaroid-card");
  cards.forEach((card) => {
    const trigger = () => {
      const img = card.querySelector(".polaroid-img");
      const captionText = card.querySelector(".caption-text");
      if (img && captionText) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Romantic memory";
        lightboxCaption.textContent = captionText.textContent;
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    };

    card.addEventListener("click", trigger);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });

  // Close handlers
  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* ============================================================================
 * 4. MAIN LOVE MESSAGE - TYPEWRITER / REVEAL
 * ============================================================================ */
let skipAllTyping = false;

function initLoveLetter() {
  const container = document.getElementById("letter-content");
  const skipBtn = document.getElementById("skip-letter-btn");
  if (!container) return;

  // Inject paragraphs empty for typing
  CONFIG.loveLetterParagraphs.forEach((para, idx) => {
    const p = document.createElement("p");
    p.className = "letter-paragraph";
    p.id = `letter-para-${idx}`;
    p.dataset.originalHtml = para; // Store for skipping
    p.innerHTML = ''; // Start empty
    container.appendChild(p);
  });

  const paras = container.querySelectorAll(".letter-paragraph");

  // Observe each paragraph individually for scroll-triggered typing
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !skipAllTyping) {
        const p = entry.target;
        if (!p.dataset.typed) {
          p.dataset.typed = "true";
          typeHTML(p, p.dataset.originalHtml, 22); // 22ms per char
        }
        obs.unobserve(p);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

  paras.forEach(p => observer.observe(p));

  // Skip button immediately displays all text
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      skipAllTyping = true;
      paras.forEach((p) => {
        p.innerHTML = p.dataset.originalHtml;
        p.classList.add("visible");
      });
      skipBtn.style.display = "none";
    });
  }
}

function typeHTML(element, html, speed) {
  element.classList.add("visible");
  
  let i = 0;
  let isTag = false;
  let buffer = '';

  function type() {
    if (skipAllTyping) return; // Abort if user skipped

    if (i < html.length) {
      let char = html.charAt(i);
      buffer += char;
      i++;

      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      if (isTag) {
        type(); // Instantly process tags
      } else {
        element.innerHTML = buffer;
        // Slight random variation in typing speed for human realism
        let currentSpeed = speed + (Math.random() * 10 - 5);
        setTimeout(type, currentSpeed);
      }
    } else {
      element.innerHTML = html; // Ensure perfect final HTML
    }
  }
  type();
}

/* ============================================================================
 * 5. LIVE RELATIONSHIP / TIME ELAPSED TIMER
 * ============================================================================ */
function initElapsedTimer() {
  const daysEl = document.getElementById("elapsed-days");
  const hoursEl = document.getElementById("elapsed-hours");
  const minsEl = document.getElementById("elapsed-minutes");
  const secsEl = document.getElementById("elapsed-seconds");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function updateElapsed() {
    const now = new Date();
    const diff = Math.max(0, now - CONFIG.startDate);

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysEl.textContent = String(days).padStart(3, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateElapsed();
  setInterval(updateElapsed, 1000);
}

/* ============================================================================
 * 6. COUNTDOWN / FUTURE MEETING TIMER (Insha'Allah October)
 * ============================================================================ */
function initCountdownTimer() {
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-minutes");
  const secsEl = document.getElementById("countdown-seconds");
  const activeView = document.getElementById("countdown-active-view");
  const arrivedView = document.getElementById("countdown-arrived-view");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function updateCountdown() {
    const now = new Date();
    const distance = CONFIG.targetDate - now;

    if (distance <= 0) {
      if (activeView) activeView.classList.add("hidden");
      if (arrivedView) arrivedView.classList.remove("hidden");
      return;
    }

    const seconds = Math.floor((distance / 1000) % 60);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ============================================================================
 * 7. QUIRKY INTERACTIVE SURPRISE
 * ============================================================================ */
function initSurpriseInteraction() {
  const btn = document.getElementById("surprise-btn");
  const card = document.getElementById("surprise-card");
  const revealBox = document.getElementById("surprise-reveal-box");

  if (!btn || !card || !revealBox) return;

  btn.addEventListener("click", (e) => {
    // Playful haptic shake on the card
    card.classList.remove("shake-element");
    void card.offsetWidth; // Trigger reflow
    card.classList.add("shake-element");

    // Spawn burst of hearts from button
    spawnBurstParticles(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 22);

    // Toggle reveal box
    const isHidden = revealBox.classList.contains("hidden");
    if (isHidden) {
      revealBox.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
      btn.innerHTML = `<span class="btn-text">Told you so! 🥰</span>`;
    } else {
      revealBox.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      btn.innerHTML = `<span class="btn-text">There's something else... 👀</span>`;
    }
  });
}

/* ============================================================================
 * 8. SECRET MESSAGE INTERACTION (3-Tap Heart)
 * ============================================================================ */
function initSecretHeartGame() {
  const heartBtn = document.getElementById("secret-heart-btn");
  const badge = document.getElementById("secret-tap-badge");
  const hint = document.getElementById("secret-tap-hint");
  const secretBox = document.getElementById("secret-revealed-box");

  if (!heartBtn || !badge || !hint || !secretBox) return;

  let taps = 0;
  const hints = [
    "Tap 1 to begin ✨",
    "One down! Keep going... 💖",
    "Just one more tap! Almost there... 🌟",
    "You found it! 🎉"
  ];

  heartBtn.addEventListener("click", (e) => {
    taps++;

    // Tap micro-animation
    heartBtn.style.transform = "scale(0.85)";
    setTimeout(() => { heartBtn.style.transform = ""; }, 180);

    // Mini heart tap particle
    spawnSingleHeart(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);

    if (taps <= 3) {
      badge.textContent = `${taps} / 3`;
      hint.textContent = hints[taps];
    }

    if (taps === 3) {
      // Confetti burst
      spawnBurstParticles(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 28);
      secretBox.classList.remove("hidden");
      heartBtn.style.pointerEvents = "none";
      heartBtn.style.borderColor = "var(--gold-warm)";
      const heartGlyph = document.getElementById("secret-heart-glyph");
      if (heartGlyph) heartGlyph.textContent = "👑";
    }
  });
}

/* ============================================================================
 * 9. FINAL GIANT BEATING HEART INTERACTION
 * ============================================================================ */
function initGiantHeartInteraction() {
  const giantHeart = document.getElementById("interactive-giant-heart");
  if (!giantHeart) return;

  const trigger = (e) => {
    const rect = giantHeart.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    spawnBurstParticles(cx, cy, 14);
  };

  giantHeart.addEventListener("click", trigger);
  giantHeart.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      trigger(e);
    }
  });
}

/* ============================================================================
 * PARTICLES & AMBIENT CANVAS (Hearts & Stardust)
 * ============================================================================ */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(36, Math.floor(window.innerWidth / 20));

  class FloatingParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 2.8 + 1.2;
      this.speedY = Math.random() * 0.5 + 0.2;
      this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.fadeSpeed = Math.random() * 0.005 + 0.002;
      this.isHeart = Math.random() > 0.72; // 28% chance of being floating heart
      this.color = Math.random() > 0.5 ? "255, 117, 143" : "255, 209, 102";
      this.angle = Math.random() * 360;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.angle += 0.5;

      if (this.y < -30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.globalAlpha = this.opacity;

      if (this.isHeart) {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        drawCanvasHeart(ctx, 0, 0, this.size * 2.2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${this.color}, 0.8)`;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new FloatingParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function drawCanvasHeart(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y + size / 4);
  ctx.quadraticCurveTo(x, y, x + size / 4, y);
  ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
  ctx.quadraticCurveTo(x + size / 2, y, x + (size * 3) / 4, y);
  ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4);
  ctx.quadraticCurveTo(x + size, y + size / 2, x + (size * 3) / 4, y + (size * 3) / 4);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x + size / 4, y + (size * 3) / 4);
  ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4);
  ctx.fill();
}

/* ============================================================================
 * INTERACTIVE PARTICLES (Tap & Click Bursts)
 * ============================================================================ */
function spawnBurstParticles(x, y, count = 16) {
  const hearts = ["❤️", "💖", "✨", "🌸", "💕"];
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "tap-floating-heart";
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    const randX = (Math.random() - 0.5) * 160;
    const randRot = (Math.random() - 0.5) * 60;
    span.style.setProperty("--rand-x", `${randX}px`);
    span.style.setProperty("--rand-rot", `${randRot}deg`);

    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1200);
  }
}

function spawnSingleHeart(x, y) {
  const span = document.createElement("span");
  span.className = "tap-floating-heart";
  span.textContent = "💖";
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  span.style.setProperty("--rand-x", `${(Math.random() - 0.5) * 40}px`);
  span.style.setProperty("--rand-rot", `${(Math.random() - 0.5) * 30}deg`);
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 1100);
}

/* ============================================================================
 * BIRTHDAY TIME-LOCK CONTROLLER (Unlocks September 16th)
 * ============================================================================ */
function initBirthdayLock() {
  const lockedView = document.getElementById("birthday-locked-view");
  const unlockedView = document.getElementById("birthday-unlocked-view");
  const previewBtn = document.getElementById("preview-bday-btn");
  const relockBtn = document.getElementById("relock-bday-btn");
  const relockWrap = document.getElementById("relock-wrap");

  const bdayDays = document.getElementById("bday-days");
  const bdayHours = document.getElementById("bday-hours");
  const bdayMinutes = document.getElementById("bday-minutes");
  const bdaySeconds = document.getElementById("bday-seconds");

  if (!lockedView || !unlockedView) return;

  const targetBday = CONFIG.birthdayDate || new Date("2026-09-16T00:00:00");
  let isManuallyUnlocked = false;

  function updateLockStatus() {
    if (isManuallyUnlocked) return;

    const now = new Date();
    const diffMs = targetBday - now;

    if (diffMs <= 0) {
      // Unlocked on arrival date!
      unlockBirthdayCard(false);
    } else {
      // Still locked - update countdown
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      if (bdayDays) bdayDays.textContent = String(days).padStart(2, "0");
      if (bdayHours) bdayHours.textContent = String(hours).padStart(2, "0");
      if (bdayMinutes) bdayMinutes.textContent = String(minutes).padStart(2, "0");
      if (bdaySeconds) bdaySeconds.textContent = String(seconds).padStart(2, "0");
    }
  }

  function unlockBirthdayCard(manual = false) {
    lockedView.classList.add("hidden");
    unlockedView.classList.remove("hidden");

    if (manual && relockWrap) {
      relockWrap.classList.remove("hidden");
    }

    const rect = unlockedView.getBoundingClientRect();
    spawnBurstParticles(rect.left + rect.width / 2, rect.top + rect.height / 3, 24);
  }

  function lockBirthdayCard() {
    isManuallyUnlocked = false;
    unlockedView.classList.add("hidden");
    lockedView.classList.remove("hidden");
    if (relockWrap) relockWrap.classList.add("hidden");
    updateLockStatus();
  }

  if (previewBtn) {
    previewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isManuallyUnlocked = true;
      unlockBirthdayCard(true);
    });
  }

  if (relockBtn) {
    relockBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      lockBirthdayCard();
    });
  }

  updateLockStatus();
  setInterval(updateLockStatus, 1000);
}
