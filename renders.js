export function renderGoblin(goblin) {

    // Create the container and elements to nest within container
    const container = document.createElement('div');
    const name = document.createElement('p');
    const goblinEmoji = document.createElement('p');
    const hp = document.createElement('p');

    // Set element text
    name.textContent = goblin.name;
    hp.textContent = goblin.hitPoints;
    goblinEmoji.textContent = (goblin.hitPoints > 0) ? '👹' : '💀';

    // Add class to container
    container.classList.add('goblin');
    goblinEmoji.classList.add('goblin-face');

    // Append elements to put inside container
    container.append(name, goblinEmoji, hp);

    // Return the container w/ elements inside
    return container;
}