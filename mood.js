async function loadMood() {
  const urlParams = new URLSearchParams(window.location.search);
  const moodIndex = parseInt(urlParams.get('mood'));

  // Replace moods.json with a built-in list
  const moods = 
   [
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
  "I’m in a mood for mischief. Watch your step!",
  // Add 80+ more here to reach 100 if needed...
];

  const mood = moods[moodIndex % moods.length]; // Safe wrap-around

  document.getElementById("moodText").innerText = "😺 " + mood;

  // OpenAI image generation
  try {
    const openAIResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY" // Replace this
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: `A cute cartoon cat that is ${mood.toLowerCase()}`,
        n: 1,
        size: "512x512"
      })
    });

    const data = await openAIResponse.json();
    document.getElementById("catImage").src = data.data[0].url;
  } catch (err) {
    document.getElementById("catImage").alt = "Failed to load image 😿";
    console.error(err);
  }
}

loadMood();
