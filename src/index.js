import { homePage } from './js/homePage';
import { Menu } from './js/menu';
import { makeContacts } from './js/contact';
import { header } from './js/header';
import './style.css';

const content = document.querySelector('#content');

header();

const main = document.createElement('main');
content.append(main);
homePage();

function clearMain() {
	main.innerHTML = '';
}

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');

homeBtn.addEventListener('click', (e) => {
	clearMain();
	homePage();
});

menuBtn.addEventListener('click', (e) => {
	clearMain();
	Menu();
});

contactBtn.addEventListener('click', () => {
	clearMain();
	makeContacts();
});
