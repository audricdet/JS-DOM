// list element 

const body = document.body; 
const h1 = body.children[0];
const ul = body.children[1];
const firstUlChild = ul.children[0];
const fastAndFurious = ul.children[5];
const children = ul.childNodes;

// Fast and furious 

children.forEach((child) => {
    console.log(child.nodeName);
    if (child.textContent === 'Fast and Furious') {
        console.log('Found it');
        child.classList.add('important');
        ul.prepend(fastAndFurious);
        fastAndFurious.addEventListener('click', e => {
            return alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        });
    }
});

// Click on 

ul.children[1].addEventListener('click', e => {
    return alert(ul.children[1].textContent);
});

ul.children[2].addEventListener('click', e => {
    return alert(ul.children[2].textContent);
});

ul.children[3].addEventListener('click', e => {
    return alert(ul.children[3].textContent);
});

ul.children[4].addEventListener('click', e => {
    return alert(ul.children[4].textContent);
});

ul.children[5].addEventListener('click', e => {
    return alert(ul.children[5].textContent);
});

ul.children[6].addEventListener('click', e => {
    return alert(ul.children[6].textContent);
});

ul.children[7].addEventListener('click', e => {
    return alert(ul.children[7].textContent);
});

ul.children[8].addEventListener('click', e => {
    return alert(ul.children[8].textContent);
});

ul.children[9].addEventListener('click', e => {
    return alert(ul.children[9].textContent);
});

ul.children[10].addEventListener('click', e => {
    return alert(ul.children[10].textContent);
});

// Remove child

if (ul.children[2].textContent === ul.children[4].textContent) {
    ul.removeChild(ul.children[4]);
};

// Add event listener for body

body.addEventListener('keyup', r_event => {
    if (r_event.key === 'r') {

    };
});


// Create a new div and insert before the ul
const parentNode = document.querySelector('body');
const newNode = document.createElement('div');

const insertedNode = parentNode.insertBefore(newNode, ul);


// create a select tag in the div 
const selectTag = document.createElement('select');
const div = document.querySelector('div');
const insertedTag =  div.insertBefore(selectTag, null);

// add options

const selectContainer = document.querySelector('select');

selectContainer.insertAdjacentHTML ('afterbegin', `<option>normal franchise</option>`);
selectContainer.insertAdjacentHTML ('afterbegin', `<option>important franchise</option>`);

// change addEvent 

const switchMode = document.querySelector('select');
const option = document.querySelectorAll('option');
const importantClass = document.querySelector('.important');
const notImportant = document.querySelectorAll('li');

console.log(importantClass);
console.log(notImportant);

switchMode.addEventListener('change', (evenement) => {
    if (switchMode.value === 'normal franchise') {
        importantClass.style.visibility = "hidden";
    }
    else {
        notImportant.style.visibility = "hidden";
    }
});