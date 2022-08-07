import { addContact } from '../handlers/add-contact.js';
import { ADD_CONTACT, MOUSE_EVENT, NAME_INPUT } from '../../data/constants.js';

export const listenersContact = () => {
	document
		.getElementById(ADD_CONTACT)
		.addEventListener(MOUSE_EVENT, (event) => {
			debugger;
			event.preventDefault();
			const nameInput = document.getElementById(NAME_INPUT);
			addContact(nameInput.value);
			nameInput.value = '';
		});
};