let Nobtn = document.querySelector('.No');
let box = document.querySelector('.box');

Nobtn.addEventListener('mouseover', () => {
    // Get the dimensions of the box
    const boxRect = box.getBoundingClientRect();

    // Get the current position of the button
    const btnRect = Nobtn.getBoundingClientRect();

    // Generate random x and y positions within the box
    let newX = Math.random() * (boxRect.width - btnRect.width);
    let newY = Math.random() * (boxRect.height - btnRect.height);

    // Apply translation to move the button to a random new position
    Nobtn.style.transform = `translate(${newX}px, ${newY}px)`;
});
