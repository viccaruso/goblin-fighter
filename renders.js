export function renderGoblin(goblin) {

    // Create the container and elements to nest within container
    const container = document.createElement('div');
    const name = document.createElement('p');
    const goblinEmoji = document.createElement('p');
    const hp = document.createElement('p');

    // Set element text
    name.textContent = goblin.name;
    hp.textContent = goblin.hp;
    goblinEmoji.textContent = (goblin.hp > 0) ? '👹' : '💀';

    // Add class to container
    container.classList.add('goblin');

    // Append elements to put inside container
    container.append(name, goblinEmoji, hp);

    // Return the container w/ elements inside
    return container;
}