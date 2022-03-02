import Pic from '../images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg';

const homePage = function() {
	const content = document.querySelector('#content');
	const main = document.querySelector('main');

	const img = new Image();
	img.src = Pic;
	main.append(img);

	img.classList.add('mainImg');

	const description = document.createElement('div');
	description.classList.add('description');
	main.append(description);
	const blurb = document.createElement('p');
	blurb.textContent =
		'Pirate Jack Lingo opened The Pearl in 1993 as a secret club for pirates. Today they serve fresh sushi and japanese food for some reason. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima suscipit non tempore, rerum cum labore accusamus ea excepturi dolore fugit rem? At saepe enim esse, iure vitae architecto explicabo eos.';

	description.append(blurb);
	const quoter = document.createElement('span');
	quoter.classList.add('writer');
	quoter.textContent = '- Owner';
	blurb.append(quoter);
	// };
	// main();

	return {
		main
	};
};

export { homePage };
