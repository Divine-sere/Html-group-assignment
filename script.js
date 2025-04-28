const words = ["Freelancer", "Photography", "Web Developer"]; // Words to type
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Typing speed in milliseconds
const erasingSpeed = 100; // Erasing speed in milliseconds
const delayBetweenWords = 2000; // Delay before typing the next word
const typingElement = document.getElementById("typing-effect");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenWords); // Start typing after a delay
});