function makeContacts() {
	const content = document.querySelector('#content');
	const main = document.querySelector('main');

	const contacts = document.createElement('div');
	contacts.classList.add('contacts');

	main.append(contacts);
}
export { makeContacts };
