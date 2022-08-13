import { addContact } from '../handlers/add-contact.js';


export const listenersContact = () => {
	document
		.getElementById(ADD_CONTACT)
		.addEventListener(MOUSE_EVENT, (event) => {

			event.preventDefault();
			const nameInput = document.getElementById(NAME_INPUT);
			addContact(nameInput.value);
			nameInput.value = '';
		});
};
