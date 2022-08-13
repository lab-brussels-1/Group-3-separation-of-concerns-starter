import { state } from '../../data/state.js';
import { removeOne } from '../handlers/remove-one.js';
import {
	CONTACT_LIST,
	MOUSE_EVENT,
	REMOVE_CONTACT,
	SELECT_ITEM,
} from '../../data/constants.js';

export const removeButton = () => {
	document
		.getElementById(CONTACT_LIST)
		.addEventListener(SELECT_ITEM, (event) => {
			state.removeList = event.target.parentNode;
			const editBtn = document.getElementById(REMOVE_CONTACT);
			editBtn.style.backgroundColor = 'yellow';
			document
				.getElementById(REMOVE_CONTACT)
				.addEventListener(MOUSE_EVENT, removeOne);
		});
};
