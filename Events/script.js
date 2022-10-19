// Create an event 

const green = document.getElementsByClassName('green')[0];
const violet = document.getElementsByClassName('violet')[0];
const orange = document.getElementsByClassName('orange')[0];
const wrapper = document.getElementsByClassName('displayedquare-wrapper')[0];
const body = document.querySelector('body');
const main = document.querySelector('main');
const section_1 = main.children[0];
const section_3 = main.children[2];
wrapper.className = 'flex'
const ul = document.querySelector('ul');

// GREEN

const create_div_green = () => {
    const div_green = document.createElement('div');
    div_green.className = 'displayedsquare green';
    wrapper.appendChild(div_green);
}

green.addEventListener('click', create_div_green);

// VIOLET 

const create_div_violet = () => {
    const div_violet = document.createElement('div');
    div_violet.className = 'displayedsquare violet';
    wrapper.appendChild(div_violet);
}

violet.addEventListener('click', create_div_violet);

// ORANGE

const create_div_orange = () => {
    const div_orange = document.createElement('div');
    div_orange.className = 'displayedsquare orange';
    wrapper.appendChild(div_orange);
}

orange.addEventListener('click', create_div_orange);

// ADD li Green

const create_li_green = () => {
    const li_green = document.createElement('li');
    li_green.textContent = 'Created a new green square';
    ul.appendChild(li_green);
}

green.addEventListener('click', create_li_green);

// ADD li VIOLET

const create_li_violet = () => {
    const li_violet = document.createElement('li');
    li_violet.textContent = 'Created a new violet square';
    ul.appendChild(li_violet);
}

violet.addEventListener('click', create_li_violet);

// ADD li ORANGE

const create_li_orange = () => {
    const li_orange = document.createElement('li');
    li_orange.textContent = 'Created a new orange square';
    ul.appendChild(li_orange);
}

orange.addEventListener('click', create_li_orange);

// Event listener for space bar

const chgbckg = () => {
    body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

const create_li_spacebar = () => {
    const li_spacebar = document.createElement('li');
    li_spacebar.textContent = 'Spacebar was pressed';
    ul.appendChild(li_spacebar);
}

body.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        chgbckg();
        create_li_spacebar();
    }
});

// When l key is pressed

const li_delete = () => {
    section_3.removeChild(ul);
}

body.addEventListener('keyup', l_event => {
    if (l_event.key === 'l') {
        li_delete();
    }
});

// When s key is pressed

const square_delete = () => {
    main.removeChild(section_1);
}

body.addEventListener('keyup', s_event => {
    if (s_event.key === 's') {
        square_delete();
    }
});

// Click on new square

const new_square_green = document.querySelector('div_green')

const alert_green = () => {
    return alert ('This square is green !');
}

new_square_green.addEventListener('click', alert_green);

