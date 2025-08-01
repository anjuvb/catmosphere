function submitMeow() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  
  const allowed = [
    "Meow"
  ];

  if (!allowed.includes(input)) {
    alert("Only variations of 'meow' are allowed 😼");
    return;
  }

  // ✅ Fixed: Only generate mood index in the actual range
  const totalMoods = 52;
  const moodIndex = Math.floor(Math.random() * totalMoods);

  window.location.href = `mood.html?mood=${moodIndex}`;
}