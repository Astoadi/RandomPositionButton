let Nobtn = document.querySelector('.No');
Nobtn.addEventListener('click', () => {
    let x = Math.random() * 100 + 20;
    let y = Math.random() * 100 + 20; 
    Nobtn.style.transform = `translate(${x}px, ${y}px)`;
});

Nobtn.addEventListener('mouseover', () => {
    let x = Math.random() * 100 + 20;
    let y = Math.random() * 100 + 20; 
    Nobtn.style.transform = `translate(${x}px, ${y}px)`;
});

