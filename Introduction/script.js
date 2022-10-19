/* Afficher le titre dans la console */

console.log(document.title);

/* Modifier le titre en JS */

document.querySelector("title").textContent = "Modifying the DOM";

/* Changer le background color en JS */

document.body.style.backgroundColor = "#FF69B4";

/* Display all th children of the body using a for ... of loop */

const collection = document.body.children;

for (children of collection) {
    console.log(collection);
}