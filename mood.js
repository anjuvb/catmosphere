// Define moods directly without moods.json
const moods = [
  "Happy and wants cuddles",
  "Hungry and meowing for tuna",
  "Angry at you for ignoring it",
  "Sleepy and purring",
  "Wants milk in a silver bowl",
  "Playful and chasing imaginary things",
  "Feeling majestic on the couch throne",
  "Sad because no one said 'meow' back",
  "Curious about the smell of your socks",
  "Wants to knock over your water glass"
  // You can add up to 100+ moods here!
];

async function loadMood() {
  const urlParams = new URLSearchParams(window.location.search);
  const moodIndex = parseInt(urlParams.get("mood"));

  if (isNaN(moodIndex) || moodIndex < 0 || moodIndex >= moods.length) {
    document.getElementById("moodText").innerText = "😿 Mood not found!";
    return;
  }

  const mood = moods[moodIndex];
  document.getElementById("moodText").innerText = "😺 " + mood;

  // Optional: generate a cat image using OpenAI (DALL·E 3)
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY" // Replace with your actual API key
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: `A cute cartoon cat that is ${mood.toLowerCase()}`,
        n: 1,
        size: "512x512"
      })
    });

    const data = await response.json();
    document.getElementById("catImage").src = data.data[0].url;
  } catch (error) {
    console.error("Failed to load cat image:", error);
    document.getElementById("catImage").alt = "Image failed to load.";
  }
}

loadMood();
