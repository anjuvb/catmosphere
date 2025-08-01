function submitMeow() {
  const input = document.getElementById("userInput").value.trim();

  if (input !== "Meow") {
    alert("Only the correct 'Meow' is allowed! 😾");
    return;
  }

  const totalMoods = 52;
  const moodIndex = Math.floor(Math.random() * totalMoods);

  window.location.href = `mood.html?mood=${moodIndex}`;
}
