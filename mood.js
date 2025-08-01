async function loadMood() {
  const urlParams = new URLSearchParams(window.location.search);
  const moodIndex = parseInt(urlParams.get('mood'));

  // Replace moods.json with a built-in list
  const moods = [
    "happy", "sleepy", "hungry", "wants milk", "grumpy", "zoomies", "curious",
    "wants to destroy furniture", "wants fish", "needs cuddles", "lonely", "energetic",
    "feels majestic", "lazy", "thinking about world domination", "wants belly rubs",
    "guarding territory", "invisible mode", "suspicious", "wants to knock things over",
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
