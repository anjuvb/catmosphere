const moods = [ 
  "I'm so happy I might start purring in Morse code!",
  "Too sleepy to cat. Wake me in nine lives.",
  "I'm hungry enough to eat your laptop charger.",
  "Milk? Yes. Now.",
  "Feeling grumpy. Hiss.",
  "Zoomies activated. Try to catch me!",
  "Curious mode: 100%.",
  "This furniture looks destructible.",
  "GIVE. FISH. NOW.",
  "I demand cuddles or I riot.",
  "I'm lonely. Sit with me, peasant.",
  "Energy = infinite. Catch me if you can!",
  "I'm majestic. You may look, not touch.",
  "Too lazy to blink.",
  "World domination starts after this nap.",
  "Belly rubs now. Maybe. Or maybe claws.",
  "Guarding this cardboard box with my life.",
  "Invisible. You can’t see me. No touch.",
  "Suspicious. Who touched my treat jar?",
  "Desk? I knock. You scream. Balance.",
  "I’m feeling playful! Attack your toes!",
  "Mischief mood. Blame the dog.",
  "Just stared at a wall for 1 hour. Zen.",
  "Yelled at the wall. No regrets.",
  "I scratched it. It’s mine now.",
  "Door closed? Crime!",
  "Tail-chasing championship begins now.",
  "Caught a bug. Ate it. Survivor.",
  "No pet. Yes stare.",
  "Stepping only on laptops today.",
  "Sleep. Eat. Repeat. Royal routine.",
  "Window watcher. Bird judge.",
  "Meow mix opera begins in 3...2...",
  "Bathtub zoomies at 3 AM.",
  "I sleep in sink. It’s ergonomic.",
  "Glaring at the void.",
  "Wants hugs. Will pretend to hate it.",
  "Meowing for no reason. Classic move.",
  "Want to sit where you’re sitting.",
  "Ignoring you for no reason.",
  "Mid-air backflip failed. Still majestic.",
  "Licking myself dramatically.",
  "Mad because you looked at me wrong.",
  "Laser pointer trauma flashback.",
  "Plotting revenge for vet visit.",
  "Napping in forbidden zone.",
  "Thinking deeply about string theory.",
  "Dramatically flopped on floor.",
  "Chair thief strikes again!",
  "Sassy. No questions.",
  "Too fabulous to function.",
  "Just meowed and ran away. Suspense.",
  "Doing nothing suspicious at all. Promise."
];

const urlParams = new URLSearchParams(window.location.search);
const moodIndex = parseInt(urlParams.get("mood"));

if (!isNaN(moodIndex) && moodIndex >= 0 && moodIndex < moods.length) {
  document.getElementById("moodText").innerText = "😺 " + moods[moodIndex];
} else {
  document.getElementBerText = "😿 Mood not found!";
}
script.js:
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

  // ✅ Fixed: Only generate mood index in the actual range
  const totalMoods = 52;
  const moodIndex = Math.floor(Math.random() * totalMoods);

  window.location.href = `mood.html?mood=${moodIndex}`;
}
