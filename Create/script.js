/* create a section in article */

// Section

const parentElement = document.querySelector('article');
const firstChild = parentElement.firstChild;

const section = document.createElement('section');

parentElement.insertBefore(section, firstChild);

const parent = document.querySelector('section');
const enfant = parent.enfant;

const p = document.createElement('p');

parent.insertBefore(p, enfant);
p.textContent = "Audric De Trez";

// Play with color

const rgb = [255, 0, 0];

const bkgcolor = () => {
    // Randomly update colours
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
    const backgroundColour = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    section.style.backgroundColor = backgroundColour

    // Change the text 

    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
        (parseInt(rgb[1]) * 587) +
        (parseInt(rgb[2]) * 114)) / 1000);

    if (brightness > 125) {
        section.style.color = "black";
    } else {
        section.style.color = "white";
    }
}

// Shuffle elements

const shuffle = () => {
    
}

bkgcolor();
shuffle();