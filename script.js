function submitMeow() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const allowed = ["meow"];

  if (!allowed.includes(input)) {
    alert("Only 'meow' is allowed 😼");
    return;
  }

  const moodIndex = Math.floor(Math.random() * 50); // choose one of 50+ moods
  window.location.href = `mood.html?mood=${moodIndex}`;
}
