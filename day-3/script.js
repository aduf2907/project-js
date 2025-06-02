let name = prompt("What's your name?");
if (!name || name.trim() === "") {
  name = "Guest";
}

const greetingEl = document.getElementById("greeting");

let currentHour = new Date().getHours();

let greetingMessage = "";

if (currentHour < 12) {
  greetingMessage = `Good Morning, ${name}`;
} else if (currentHour < 17) {
  greetingMessage = `Good Afternoon, ${name}`;
} else if (currentHour < 21) {
  greetingMessage = `Good Evening, ${name}`;
} else {
  greetingMessage = `Good Night, ${name}`;
}

greetingEl.textContent = greetingMessage;
