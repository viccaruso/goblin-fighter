// import functions and grab DOM elements
import { renderGoblin } from './renders.js';

const deadGoblinsEl = document.querySelector('#dead-goblins');
const characterHPEl = document.querySelector('#hit-points');
const goblinContainerEl = document.querySelector('#monsters-div');
const form = document.querySelector('form');

// let state
let charHP = 10;
let killCount = 0;
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

updateState();
// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Always

    // Get and store user input from form
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    // Create a new goblin using form data
    // if goblin is unnamed use a random value
    const newGoblin = {
        name: (goblinName === '') ? `Goblin #${Math.floor(Math.random() * 5000)}` : goblinName,
        hitPoints : 3
    };

    // Add new goblin into array of goblins
    goblinList.push(newGoblin);

    // Redraw DOM to display all goblins
    displayGoblins();
});

function displayGoblins() {
    updateState();
    // Clear all elements from goblin container
    while (goblinContainerEl.firstChild) {
        goblinContainerEl.firstChild.remove();
    }

    // Loop through goblins and render each goblin
    for (let goblin of goblinList) {
        // Create new goblin element
        const goblinEl = renderGoblin(goblin);

        // Make goblin element clickable if it is still alive
        if (goblin.hitPoints > 0) {
            goblinEl.addEventListener('click', () => {
                // Player hit attempt
                // If hit was successful decrement goblin hp
                if (Math.random() > .45) {
                    goblin.hitPoints--;
                    alert(`You hit ${goblin.name}!`);
                } else {
                    alert(`You tried to hit ${goblin.name}, but missed.`);
                }
                // Goblin hit attempt
                if (Math.random() > .40) {
                    charHP--;
                    alert(`${goblin.name} hit you!`);
                } else {
                    alert(`${goblin.name} tried to hit you, but missed!`);
                }

                // Check if goblin is dead
                if (goblin.hitPoints === 0) {
                    killCount++;
                }

                // Check if player is dead
                if (charHP === 0) {
                    alert('---=== GAME OVER ===---');
                }

                // Update all changes to DOM
                displayGoblins();
            });
        }
        goblinContainerEl.append(goblinEl);
    }
}

displayGoblins();

function updateState() {
    characterHPEl.textContent = charHP;
    deadGoblinsEl.textContent = `Killed goblins: ${killCount}`;
}