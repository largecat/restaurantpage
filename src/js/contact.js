function makeContacts() {
	const main = document.querySelector('main');

	const contacts = document.createElement('div');
	contacts.classList.add('contacts');

	const contactBox = document.createElement('div');
	contactBox.classList.add('contact-box');

	const h1 = document.createElement('h1');
	h1.textContent = 'Contacts';

	const msg = document.createElement('div');
	msg.textContent = "Please don't contact us. Just come over and eat our food. ";

	contacts.appendChild(h1);
	contacts.appendChild(contactBox);
	contactBox.appendChild(msg);
	main.appendChild(contacts);
}
export { makeContacts };
