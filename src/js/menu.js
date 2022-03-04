import Logo from '../images/ship.png';

function Menu() {
	const main = document.querySelector('main');
	const menu = document.createElement('div');
	menu.classList.add('menu');

	const title = document.createElement('h1');
	title.textContent = 'Menu';
	main.appendChild(menu);
	menu.appendChild(title);

	const menuBox = document.createElement('div');
	menuBox.classList.add('menuBox');

	const menuHeaders = (name) => {
		const menuCategory = document.createElement('div');
		menuCategory.classList.add('menuCategory');
		menuBox.appendChild(menuCategory);

		const h1 = document.createElement('h1');
		h1.textContent = name;
		menuCategory.appendChild(h1);

		return menuCategory;
	};

	const apps = menuHeaders('apps');
	const entrees = menuHeaders('entrees');
	const desserts = menuHeaders('desserts');

	const menuItem = (item, price, menuCategory) => {
		const foodItem = document.createElement('div');
		foodItem.classList.add('menu-item');

		const foodName = document.createElement('div');
		foodName.textContent = item;
		foodItem.appendChild(foodName);

		const itemPrice = document.createElement('div');
		itemPrice.textContent = price;
		foodItem.appendChild(itemPrice);
		menuCategory.appendChild(foodItem);
	};

	menuItem('Cheese', '$12', apps);
	menuItem('Edamame', '$8', apps);
	menuItem('Crab soup', '$14', apps);
	menuItem('California Roll', '$7', entrees);
	menuItem('Dynamite roll', '$9', entrees);
	menuItem('Chicken teriyaki', '$16', entrees);
	menuItem('Shrimp tempura', '$7', entrees);
	menuItem('Ice cream', '$6', desserts);
	menuItem('Fried ice cream', '$9', desserts);
	menuItem('Cheesecake', '$14', desserts);
	menuItem('Spicy edamame', '$9', apps);

	menu.append(menuBox);

	const logo = new Image();
	logo.src = Logo;
	logo.id = 'menu-logo';
	main.appendChild(logo);
}

export { Menu };
