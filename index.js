let Nobtn = document.querySelector('.No');
Nobtn.addEventListener('click', () => {
    let x = Math.random() * 400 + 1;
    let y = Math.random() * 200 + 1; 
    Nobtn.style.transform = `translate(${x}px, ${y}px)`;
});

Nobtn.addEventListener('mouseover', () => {
    let x = Math.random() * 400 + 1;
    let y = Math.random() * 200 + 1; 
    Nobtn.style.transform = `translate(${x}px, ${y}px)`;
});

