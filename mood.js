// Use OpenAI's DALL·E API (you'll need your API key)
const moods = [...]; // Copy from moods.json

async function loadMood() {
  const urlParams = new URLSearchParams(window.location.search);
  const moodIndex = parseInt(urlParams.get('mood'));
  const mood = moods[moodIndex];

  document.getElementById("moodText").innerText = "😺 " + mood;

  // Generate image using OpenAI (replace with your server call if keys are secret)
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: `A cartoon cat that is ${mood.toLowerCase()}`,
      n: 1,
      size: "512x512"
    })
  });

  const data = await response.json();
  document.getElementById("catImage").src = data.data[0].url;
}

loadMood();
