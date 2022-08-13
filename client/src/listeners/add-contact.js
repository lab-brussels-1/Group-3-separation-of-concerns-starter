import { addContact } from '../handlers/add-contact.js';
<<<<<<< HEAD
import { ADD_CONTACT, MOUSE_EVENT, NAME_INPUT } from '../../data/constants.js';
=======

>>>>>>> cf053bf6b8926b8640f4dee0cdbfedc04422c6a9

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
