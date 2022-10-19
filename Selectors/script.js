/* Add a title attribute to every element that has the important class */

const important = document.querySelector(".important");

important.setAttribute('title', 'This is a important item');

/* Select all img */ 

const img = document.querySelectorAll("img"); 

for (let element of img) {
    if (element.classList.contains("important")) {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}

/* Paragraphes */

const p = document.querySelectorAll("p"); 

for (let elements of p) {
    console.log(elements)
    if (elements.className.length > 0) {
        console.log(elements + elements.className)
    }
};

/* Color paragraphs */

const para = document.querySelectorAll("p"); 

for (let elements of para) {
    if (elements.className.length > 0) {
    }
    else {
        elements.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
};
}
