// Select the last chilf of ol element

/*const ol = document.querySelector('ol');

const a = ol.children[0];
const b = ol.children[1];
const c = ol.children[2];
const d = ol.children[3];
const e = ol.children[4];

// move the last element of Ol a the beginning of the list 

e.appendChild(a);
e.appendChild(b);
e.appendChild(c);
e.appendChild(d);

// move the h2 of the second section and vice-versa

const main = document.querySelector('main');

const section_1 = main.children[0];
const section_2 = main.children[1];
const section_3 = main.children[2];
const div_1 = section_3.children;

const h2_section_2 = section_2.children[0];
const h2_section_3 = section_3.childNodes[0];

// h2_section_3.appendChild(section_2);
// h2_section_2.appendChild(section_3);
*/

// Solution jacinto 

const title2 = document.querySelectorAll("section");

const f = title2[0];
const g = title2[1];
const h = title2[2];

h.appendChild(g);

// delete the last section of the code 

main.removeChild(section_3);