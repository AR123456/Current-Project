// Its speech synthesis interface lives on the browser’s window object as speechSynthesis while its speech recognition interface lives on the browser’s window object as SpeechRecognition in Firefox and as webkitSpeechRecognition in Chrome.set the recognition interface to SpeechRecognition regardless of the browser
window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
// instantiate speech synthysis
const synth = window.speechSynthesis;

// instantiate speech recognition interface
const recognition = new SpeechRecognition();

const icon = document.querySelector("i.fa.fa-microphone");
//create a paragraph element to hold words said
let paragraph = document.createElement("p");
//append to the text box
let container = document.querySelector(".text-box");

container.appendChild(paragraph);

const sound = document.querySelector(".sound");

// when microphone icon   clicked,   play   sound and start the speech recognition service.   add a click event listener to the icon

icon.addEventListener("click", () => {
  sound.play();
  // after playing the sound, created and called a dictate function
  dictate();
});

// dictate function starts the speech recognition service by calling the start method on the speech recognition instance
const dictate = () => {
  recognition.start();
  recognition.onresult = event => {
    //resulting event returns a SpeechRecognitionEvent which contains a results object
    //it contains the transcript property holding the recognized speech in text
    const speechToText = event.results[0][0].transcript;
    // save the recognized text in a variable called speechToText and put it in the paragraph element on the page
    paragraph.textContent = speechToText;
    if (event.results[0].isFinal) {
      if (speechToText.includes("what is the time")) {
        speak(getTime);
      }
      if (speechToText.includes("what is today's date")) {
        speak(getDate);
      }
      if (speechToText.includes("what is the weather in")) {
        getTheWeather(speechToText);
      }
    }
  };
};

// function speak call whenever app needs say something
// he speak function takes in a function called the action as a parameter
const speak = action => {
  // function returns a string which is passed toSpeechSynthesisUtterance
  utterThis = new SpeechSynthesisUtterance(action());
  // speechSynthesis speak method called passed the content to read
  synth.speak(utterThis);
};
const getTime = () => {
  const time = new Date(Date.now());
  return `the time is ${time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  })}`;
};
const getDate = () => {
  const time = new Date(Date.now());
  return `today is ${time.toLocaleDateString()}`;
};

const getTheWeather = speech => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      speech.split(" ")[5]
    }&appid=58b6f7c78582bffab3936dac99c31b25&units=imperial`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(weather) {
      if (weather.cod === "404") {
        utterThis = new SpeechSynthesisUtterance(
          `I cannot find the weather for ${speech.split(" ")[5]}`
        );
        synth.speak(utterThis);
        return;
      }
      utterThis = new SpeechSynthesisUtterance(
        `the weather condition in ${weather.name} is mostly full of ${
          weather.weather[0].description
        } at a temperature of ${weather.main.temp} degrees Fahrenheit`
      );
      synth.speak(utterThis);
    });
};

// https://medium.freecodecamp.org/how-to-build-a-simple-speech-recognition-app-a65860da6108
