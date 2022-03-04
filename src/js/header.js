import Logo from '../images/ship.png';

function header() {
	const header = document.createElement('header');

	const logo = new Image();
	logo.src = Logo;
	logo.id = 'logo';
	header.append(logo);

	const title = document.createElement('h1');
	title.textContent = 'Wowee, Tasty Foods';
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

export { header };
