
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.btn-load')

let page;
let maxPage;
let value;
// let simplelightboxInstance = null;


form.addEventListener("submit", onFormSubmit);

async function onFormSubmit(event) {
    event.preventDefault();
    page = 1;
    value = input.value.trim()

    if (value === '') {
        form.reset()

        return iziToast.error({
            message: 'Enter search image name',
            position: "topRight"
        });

    }

    loader.classList.remove('visually-hidden');
    try {
        const data = await getData(value, page);
        maxPage = Math.ceil(data.total / 15);

        gallery.innerHTML = ``;

        createMarkup(data);
    } catch (err) {
        console.log(err);
    }

    loader.classList.add('visually-hidden');
    visabilityloadBtn()
    form.reset();
};

loadBtn.addEventListener('click', onClickBtn);

async function onClickBtn() {
    page += 1;

    loader.classList.remove('visually-hidden');

    if (page === maxPage) {
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight"
        });
    };

    const data = await getData(value, page);

    createMarkup(data);

    loader.classList.add('visually-hidden');
    visabilityloadBtn()


    const height =
        gallery.firstElementChild.getBoundingClientRect().height;

    scrollBy({
        behavior: 'smooth',
        top: height * 2,
    });
};

function visabilityloadBtn() {
    if (page >= maxPage) {
        loadBtn.classList.add('visually-hidden');
    } else {
        loadBtn.classList.remove('visually-hidden');
    }
}