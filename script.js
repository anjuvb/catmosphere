function submitMeow() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();

  const allowed = [
    "meow", "meowwww", "meewww", "meooooooow", "meowmeow",
    "meeooow", "mew", "miaow", "nyan", "mrrrow", "prrr"
  ];

  if (!allowed.includes(input)) {
    alert("Only variations of 'meow' are allowed 😼");
    return;
  }

  const totalMoods = 52;
  const moodIndex = Math.floor(Math.random() * totalMoods);
  window.location.href = `mood.html?mood=${moodIndex}`;
}

// 🔄 Toggle Night Mode
function toggleNightMode() {
  document.body.classList.toggle("night");
}

// 🔊 Toggle Background Music
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 🐱 Add moving cat animation at bottom
const catSprite = document.createElement("div");
catSprite.className = "moving-cat";
catSprite.innerText = "🐱";
document.body.appendChild(catSprite);

// 🎉 Cute animation on dropdown and button interaction
const meowSelect = document.getElementById("userInput");
const sendButton = document.querySelector("button");

meowSelect.addEventListener("change", () => {
  meowSelect.style.transform = "scale(1.1)";
  setTimeout(() => meowSelect.style.transform = "scale(1)", 300);
});

sendButton.addEventListener("click", () => {
  sendButton.style.transform = "rotate(1deg) scale(1.05)";
  setTimeout(() => sendButton.style.transform = "rotate(0) scale(1)", 300);
});


