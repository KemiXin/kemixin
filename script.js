//Dark mode toggle

const toggleBtn = document.getElementById('dark-mode-btn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // change button text
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

//Mid-Autumn Festival, This is Random Funfact generator

const factsBtn = document.getElementById('funfact-btn');
const factsText = document.getElementById('funfact-text');

if (factsBtn && factsText) {
const facts = [
    "Mid-Autumn Festival is also known Moon Festival.",
    "Mid-Autumn was once the second Valentine's Day in China.",
    "The Mid-Autumn Festival is often in late summer!",
    "Unbelievable! A box of mooncakes can be more than 1,000 yuan!(150 USD)",
    "Chinese people like to climb hills or walk by a lake to appreciate the mid-fall moon."
];


factsBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factsText.textContent = facts[randomIndex];
});
}

//Lantern Festival, This is a Random Riddle generator
const riddlesBtn = document.getElementById('riddle-btn');
const riddlesText = document.getElementById('riddle-text');

const riddles = [
    "They look like twin brothers, both sturdy and tall. They work together and go everywhere together. But they only go near solid food and do not care for soup. Who are they?",
    "I can follow you for thousands of miles and not miss home. I do not fear cold or fire, and I desire neither food nor drink. but I disappear when the sun sets behind the western mountains. Who am I?",
    "It works hard all its life, counting numbers day and night, but never gets past 12. What is it?",
    "What belongs to you but others use it more than you do?",
    "This lovely maiden eats no meat but eats leaves. She labours each day spinning and weaving for the benefit of others. Who is she?"
];

function newRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    riddlesText.textContent = riddles[randomIndex]
}
if (riddlesBtn && riddlesText) {
riddlesBtn.addEventListener('click', newRiddle);
}


//Contact validator

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-inner");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name = form.querySelector("input[type='text']");
        const email = form.querySelector("input[type='email']");
        const message = form.querySelector("textarea");

        let errors = [];

        //validate name
        if (name.value.trim() === "") {
            errors.push("Name can't be empty.");

        }
        //validate email
        if (email.value.trim() === "") {
            errors.push("Email cannot be empty.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            errors.push("Email format is invalid.")
        }
        //validate message
        if (message.value.trim() === "") {
            errors.push("Message cannot be empty.");
        }

        //errors or success shows result
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Form submitted sucessfully!");
            form.reset();
        }
    });
});