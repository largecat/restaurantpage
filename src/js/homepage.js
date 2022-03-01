import Logo from '../images/ship.png';
import Pic from '../images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg';

const homePage = function() {
	const content = document.querySelector('#content');

	let header = () => {
		const header = document.createElement('header');

		const logo = new Image();
		logo.src = Logo;
		logo.id = 'logo';
		header.append(logo);

		const title = document.createElement('h1');
		title.textContent = 'The Pearl';
		header.append(title);
		content.append(header);
	};
	header();

	let main = () => {
		const main = document.createElement('main');
		content.append(main);

		const img = new Image();
		img.src = Pic;
		main.append(img);

		img.classList.add('mainImg');

		const description = document.createElement('div');
		description.classList.add('description');
		main.append(description);
		const blurb = document.createElement('p');
		blurb.textContent =
			'Pirate Jack Lingo opened The Pearl in 1784 as a secret club for pirates. Today they serve fresh sushi and japanese food for some reason. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima suscipit non tempore, rerum cum labore accusamus ea excepturi dolore fugit rem? At saepe enim esse, iure vitae architecto explicabo eos.';

		description.append(blurb);
		const quoter = document.createElement('span');
		quoter.classList.add('writer');
		quoter.textContent = '- Owner';
		blurb.append(quoter);
	};
	main();

	return {
		header,
		main
	};
};

export { homePage };
