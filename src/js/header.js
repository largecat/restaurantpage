import Logo from '../images/ship.png';

function header() {
	const content = document.querySelector('#content');
	const header = document.createElement('header');

	const logo = new Image();
	logo.src = Logo;
	logo.id = 'logo';
	header.appendChild(logo);

	const title = document.createElement('h1');
	title.textContent = 'Wowee, Tasty Foods';
	header.appendChild(title);

	const nav = document.createElement('nav');
	header.appendChild(nav);
	const homeBtn = document.createElement('button');
	const menuBtn = document.createElement('button');
	const contactBtn = document.createElement('button');

	homeBtn.classList.add('btn', 'homeBtn');
	menuBtn.classList.add('btn', 'menuBtn');
	contactBtn.classList.add('btn', 'contactBtn');

	homeBtn.textContent = 'home';
	menuBtn.textContent = 'menu';
	contactBtn.textContent = 'contact';

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	content.appendChild(header);
}

export { header };
