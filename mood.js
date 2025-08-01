async function loadMood() {
  const urlParams = new URLSearchParams(window.location.search);
  const moodIndex = parseInt(urlParams.get('mood'));

  // Load moods.json dynamically
  const response = await fetch('moods.json');
  const moods = await response.json();

  const mood = moods[moodIndex];
  document.getElementById("moodText").innerText = "😺 " + mood;

  // Fetch image from OpenAI
  const openAIResponse = await fetch("https://api.openai.com/v1/images/generations", {
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

  const data = await openAIResponse.json();
  document.getElementById("catImage").src = data.data[0].url;
}

loadMood();
