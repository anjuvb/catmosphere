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

  const moodIndex = Math.floor(Math.random() * 100);
  window.location.href = `mood.html?mood=${moodIndex}`;
}
