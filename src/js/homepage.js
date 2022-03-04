import Pic from '../images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg';

const homePage = function() {
	const main = document.querySelector('main');

	const img = new Image();
	img.src = Pic;
	img.classList.add('main-img');
	main.append(img);

	const description = document.createElement('div');
	description.classList.add('description');

	const blurb = document.createElement('p');
	blurb.textContent =
		'Wowee Tasty Foods opened in 1993 as a secret club for pirates. Today we serve sushi and japanese food for some reason lol idk. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima suscipit non tempore, rerum cum labore accusamus ea excepturi dolore fugit rem? At saepe enim esse, iure vitae architecto explicabo eos.';

	main.append(description);
	description.append(blurb);
	const quoter = document.createElement('span');
	quoter.classList.add('quoter');
	quoter.textContent = '- Owner';
	blurb.append(quoter);
};

export { homePage };
