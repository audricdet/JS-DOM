const body = document.body;
const main = body.children[1]
const section_1 = main.children[0];
const section_2 = main.children[1];
const section_3 = main.children[2];
const section_4 = main.children[3];
const first_input = document.querySelector('#firstname');
const first_span = section_1.children[2];


// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

const add_first_span = () => {
    first_span.textContent = first_input.value;
}   

first_input.addEventListener('keyup', event => {
    if (event.code == 'Enter' ) {
    add_first_span();
    }
});

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

const second_input = document.querySelector('#age');
const section_truth = document.querySelector('#a-hard-truth');

const verify_age = () => {
    if (second_input.value < 18) {
        section_truth.style.visibility = 'hidden';
    }
    else if (second_input.value >= 18) {
        section_truth.style.visibility = 'visible';
    }
};

second_input.addEventListener('keyup', e => {
    if (e.code == 'Enter') {
        verify_age();
    }
});

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

const pwd = document.querySelector('#pwd');
const pwd_confirm = document.querySelector('#pwd-confirm');

const pwd_turn_red = () => {
    if (pwd.value.length < 6) {
        pwd.style.backgroundColor = 'red' ;
    }
    else {
        pwd.style.backgroundColor = 'green';
    }
}

const pwd_confirm_turn_red = () => {
    if (pwd.value == pwd_confirm.value) {
        pwd_confirm.style.backgroundColor = 'green';
    }
    else {
        pwd_confirm.style.backgroundColor = 'red';
    }
};

pwd.addEventListener('keyup', a => {
    if (a.code == 'Enter') {
        pwd_turn_red();
    }
});

pwd_confirm.addEventListener('keyup', b => {
    if (b.code == 'Enter') {
        pwd_confirm_turn_red();
    }
});

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

const switch_mode = document.querySelector('#toggle-darkmode');
const option = document.querySelectorAll('option');

switch_mode.addEventListener('change', (evenement) => {
    if (switch_mode.value == 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});

