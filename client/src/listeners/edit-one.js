import { state } from './../../data/state.js';
import { saveNew } from '../handlers/edit-one.js';

import {
	NAME_INPUT,
	CONTACT_LIST,
	MOUSE_EVENT,
	SAVE_CONTACT,
	EDIT_CONTACT,
	DBLCLICK,
} from '../../data/constants.js';

export const editContact = () => {
	document.getElementById(CONTACT_LIST).addEventListener(DBLCLICK, (event) => {
		state.editList = event.target.parentNode;
		const editBtn = document.getElementById(EDIT_CONTACT);
		editBtn.style.backgroundColor = 'yellow';
		editBtn.innerText = 'save';
		const confirmEdit = window.confirm('"You want to edit this contact"');
		if (confirmEdit === true) {
			document.getElementById(NAME_INPUT).value = event.target.innerText;
		}
		document
			.getElementById(SAVE_CONTACT)
			.addEventListener(MOUSE_EVENT, saveNew);
	});
};
