import Logo from './images/ship.png';
import { homePage } from './js/homePage';
import { makeMenu } from './js/menu';
import { makeContacts } from './js/contact';

import './style.css';

console.log('hello, im console logging hooray');
const content = document.querySelector('#content');

function header() {
	const header = document.createElement('header');

	const logo = new Image();
	logo.src = Logo;
	logo.id = 'logo';
	header.append(logo);

	const title = document.createElement('h1');
	title.textContent = 'The Pearl';
	header.append(title);

	const nav = document.createElement('nav');
	header.append(nav);
	const homeBtn = document.createElement('button');
	const menuBtn = document.createElement('button');
	const contactBtn = document.createElement('button');

	homeBtn.classList.add('btn', 'homeBtn');
	menuBtn.classList.add('btn', 'menuBtn');
	contactBtn.classList.add('btn', 'contactBtn');

	homeBtn.textContent = 'home';
	menuBtn.textContent = 'menu';
	contactBtn.textContent = 'contact';

	nav.append(homeBtn);
	nav.append(menuBtn);
	nav.append(contactBtn);

	content.append(header);
}
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
	console.log('home button clicked');
	// e.target.classList.add('selectedBtn');
	clearMain();
	homePage();
});

menuBtn.addEventListener('click', (e) => {
	console.log('menu button clicked');
	console.log(e.target);
	// e.target.classList.add('selectedBtn');
	clearMain();
	makeMenu();
});

contactBtn.addEventListener('click', () => {
	console.log('contact button clicked');
	clearMain();
	makeContacts();
});
