function submitMeow() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  if (input !== "meow") {
    alert("Only 'meow' is allowed 😼");
    return;
  }

  // Pick a random mood index (0–99)
  const moodIndex = Math.floor(Math.random() * 100);
  window.location.href = `mood.html?mood=${moodIndex}`;
}
