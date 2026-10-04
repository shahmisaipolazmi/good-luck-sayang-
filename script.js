function openLetter() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  burstHearts(18);
}

const messages = {
  hug: `
    <h3>BIG HUG FOR MY PRINCESS 🫂💗</h3>
    <p>Come hereee sayanggg 🥺🫂<br><br>
    Forget the stress for a moment. Imagine orang giving you the biggest warm hug everrr.
    You've got this, okay? 💗</p>
  `,
  kiss: `
    <h3>MWAHHHH 💋💋💋</h3>
    <p>One for good luck...<br>
    One for confidence...<br>
    And a few extra because orang rindu kamu sooo muchhh 🥺💗</p>
  `,
  nervous: `
    <h3>Heyyy, breatheee 🌷</h3>
    <p>It's okay to feel nervous, sayang.<br><br>
    Take a deep breath. Read the question slowly. Do what you know.
    You don't need to be perfect. Just give it your best. Orang percaya kamu boleh buat 💗</p>
  `,
  proud: `
    <h3>One More Thing... 🥹💗</h3>
    <p>I'm proud of you already.<br><br>
    Not because of your results, but because I know how much effort, stress,
    struggle and sacrifice you've put into getting here.<br><br>
    Whatever happens, you're still my princess. 💗</p>
  `
};

function showPopup(type) {
  document.getElementById("popup-content").innerHTML = messages[type];
  document.getElementById("popup").classList.remove("hidden");
  burstHearts(14);
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

document.getElementById("popup").addEventListener("click", function(e) {
  if (e.target === this) closePopup();
});

function burstHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const h = document.createElement("div");
    h.className = "burst-heart";
    h.textContent = ["💗","💖","💕","💞","💓"][Math.floor(Math.random()*5)];
    h.style.left = "50%";
    h.style.top = "50%";
    h.style.setProperty("--x", `${(Math.random()-.5)*500}px`);
    h.style.setProperty("--y", `${(Math.random()-.5)*500}px`);
    h.style.fontSize = `${14 + Math.random()*22}px`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1300);
  }
}

function floatingHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["💗","♡","💕","✦"][Math.floor(Math.random()*4)];
  h.style.left = `${Math.random()*100}vw`;
  h.style.fontSize = `${14 + Math.random()*20}px`;
  h.style.animationDuration = `${6 + Math.random()*7}s`;
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 14000);
}
setInterval(floatingHeart, 700);
