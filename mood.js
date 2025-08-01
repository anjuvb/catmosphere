function submitMeow() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const responseBox = document.getElementById("response");

  if (input !== "meow") {
    responseBox.innerText = "Only 'meow' is understood here 😾";
    return;
  }

  const moods = [
    "I'm so happy I might start purring in Morse code!",
    "Too sleepy to cat. Wake me in nine lives.",
    "I'm hungry enough to eat an entire tuna... or your lunch.",
    "Meow me milk! In a fancy bowl, please.",
    "Feeling grumpy. Don't even look at me.",
    "Zoomies activated. The floor is my racetrack.",
    "I'm curious... what's inside that forbidden drawer?",
    "I must destroy this furniture. It has wronged me.",
    "Fish. Now. Or I scream forever.",
    "I demand cuddles or I file a formal pawtest.",
    "I'm lonely. Can you come sit on the floor with me?",
    "I'm bursting with energy. Let's climb walls!",
    "I feel majestic. Bow before my floofiness.",
    "Too lazy to blink. Just vibing.",
    "I’m plotting world domination. You may pet me first.",
    "Belly rubs now. But I will bite halfway through.",
    "I am guarding this territory. No crumbs shall pass.",
    "I'm in invisible mode. You can't see me. Shhh.",
    "I'm suspicious... why did you touch the treat jar?",
    "I will now knock everything off your desk. Because art.",
    "I'm feeling playful. Where's my favorite toy?",
    "I’m in a mood for mischief. Watch your step!"
  ];

  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  responseBox.innerText = "😺 " + randomMood;
}
