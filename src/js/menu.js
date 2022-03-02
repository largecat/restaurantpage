function makeMenu() {
	// const content = document.querySelector('#content');
	const main = document.querySelector('main');
	const menuBtn = document.querySelector('.menuBtn');

	const menu = document.createElement('div');
	menu.classList.add('menu');
	main.append(menu);

	const title = document.createElement('h1');
	title.textContent = 'Menu';
	menu.append(title);

	const menuContent = document.createElement('div');
	menuContent.classList.add('menuContent');
	menu.append(menuContent);

	const apps = document.createElement('div');
	const entrees = document.createElement('div');
	const desserts = document.createElement('div');

	apps.classList.add('apps');
	entrees.classList.add('entrees');
	desserts.classList.add('desserts');

	apps.textContent = 'mozzerella sticks';
	entrees.textContent = 'chicken fingers';
	desserts.textContent = 'cheesecake';

	menuContent.append(apps);
	menuContent.append(entrees);
	menuContent.append(desserts);
}

export { makeMenu };
