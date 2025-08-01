==function submitMeow() {
  const input = document.getElementById("userInput").value.trim();
  if (input !== "Meow") return;

  const totalMoods = 52;
  const moodIndex = Math.floor(Math.random() * totalMoods);
  window.location.href = `mood.html?mood=${moodIndex}`;
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
