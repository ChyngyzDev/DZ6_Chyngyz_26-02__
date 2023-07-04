const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
const card = document.querySelector('.card');

let count = 0;

next.addEventListener('click', () => {
    if (count < 200) {
        count++;
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then((response) => response.json())
            .then((data) => {
                card.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <br>
                <span>${data.completed}</span>
                `
            });
    }
});

prev.addEventListener('click', () => {
    if (count > 1) {
        count--;
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then((response) => response.json())
            .then((data) => {
                card.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <br>
                <span>${data.completed}</span>
                `
            });
    }
});