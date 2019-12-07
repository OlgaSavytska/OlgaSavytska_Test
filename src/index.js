import menu from '../src/menu.json';
import postFeedItemTemplate from '../src/home.hbs';
import styles from '../src/styles.css';


console.log(menu);
console.log(postFeedItemTemplate);

const refs = {
    postFeed: document.querySelector('.menu'),
};

var buttons = document.querySelectorAll('.button-item'),
    index, button;


for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const buttonForTarget = event.target;
    const li = buttonForTarget.closest('.menu-items');
    li.remove();
    console.log(li);
}


const buttonMore = document.querySelector('.load-more-btn');
buttonMore.addEventListener('click', loadMorefunc);

function loadMorefunc() {

    function buildMenuFeed(menu) {
        const makeup = menu.map(menu => postFeedItemTemplate(menu)).join('');
        console.log(makeup);
        refs.postFeed.insertAdjacentHTML('beforeend', makeup);
    }
    buildMenuFeed(menu);
    var buttons = document.querySelectorAll('.button-item'),
        index, button;


    for (index = 0; index < buttons.length; index++) {
        button = buttons[index];
        button.addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        if (event.target.nodeName !== "BUTTON") {
            return;
        }

        const buttonForTarget = event.target;
        const li = buttonForTarget.closest('.menu-items');
        li.remove();
        console.log(li);
    }
}

const Theme = {
    GRID: 'grid-theme',
    COLUMN: 'column-theme',
}

const changeTheme = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');
const input = document.getElementById('theme-switch-control')

changeTheme.addEventListener('click', event => { console.log(event) })

const userInput = localStorage.getItem('theme');

if (userInput !== null) {
    document.body.classList.add(userInput);
    if (userInput === 'column-theme') {
        input.checked = true;
    }
}

input.addEventListener('change', function (event) {
    if (event.target === input && input.checked === true) {
        document.body.classList.toggle(Theme.COLUMN);
        localStorage.setItem('theme', Theme.COLUMN);
    } else {
        document.body.classList.remove(Theme.COLUMN);
        localStorage.setItem('theme', Theme.GRID);
    }
})

input.addEventListener('change', function (event) {
    if (event.target === input && input.checked === false) {
        document.body.classList.toggle(Theme.GRID);
        localStorage.setItem('theme', Theme.GRID);
    } else {
        document.body.classList.remove(Theme.GRID);
        localStorage.setItem('theme', Theme.COLUMN);
    }
})