// import functions and grab DOM elements
import { renderGoblin } from './renders.js';

const deadGoblinsEl = document.querySelector('#dead-goblins');
const characterHPEl = document.querySelector('#hit-points');
const goblinContainerEl = document.querySelector('#monsters-div');
const form = document.querySelector('form');

// let state
let charHP = 10;
const goblinList = [
    {
        name: 'Hoblin',
        hitPoints: 3
    },
    {
        name: 'Boblin',
        hitPoints: 3
    },
    {
        name: 'Roblin',
        hitPoints: 3
    },
];


// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Always

    // Get and store user input from form
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    // Create a new goblin using form data
    const newGoblin = {
        name: goblinName,
        hitPoints : 3
    };

    // Add new goblin into array of goblins
    goblinList.push(newGoblin);

    // Redraw DOM to display all goblins
    displayGoblins();
});

function displayGoblins() {

    // Clear all elements from goblin container
    while (goblinContainerEl.firstChild) {
        goblinContainerEl.firstChild.remove();
    }

    // Loop through goblins and render each goblin
    for (let goblin of goblinList) {
        // Create new goblin element
        const goblinEl = renderGoblin(goblin);

        // Make goblin element clickable if it is still alive
        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
                // If hit was successful decrement goblin hp
                if (Math.random() > .45) {
                    goblin.hp--;
                    alert(`You hit ${goblin.name}!`);
                } else {
                    alert(`You tried to hit ${goblin.name}, but missed.`);
                }
            });
        }
    }

}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
