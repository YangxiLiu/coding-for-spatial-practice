console.log('sentensegenerate');
let nouns = ['heart', 'rainbow', 'ocean','sky','plant'];
let verbs = ['sing', 'dance', 'dream', 'fly', 'explore'];
let adjectives = ['joyfully', 'vividly', 'fearlessly', 'curiously', 'gracefully'];
let paragraph = document.getElementById("sentencedisplay")

function generate() {
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  let verb = verbs[Math.floor(Math.random() * verbs.length)];
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  
  let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`;
  document.getElementById('sentence').innerHTML = sentence;
}

clickbutton.addEventListener('click', () => {
    generatedSentence.textContent = generateRandomSentence();
});

