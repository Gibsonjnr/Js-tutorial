// DOM===Document Object Model

const elementToChange = document.querySelectorAll(".items");
for (let i = 0; i < elementToChange.length; i++) {
    const currentElement = elementToChange[i];
    currentElement.innerHTML = "Nigga yo stupid!!!";
}

// click on button
const button = document.querySelector(".event-button");
button.addEventListener("click", function() {
    console.log("Hey there!");
});


const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener("keyup", function() {
  paragraph.innerText  = input.value;
});
