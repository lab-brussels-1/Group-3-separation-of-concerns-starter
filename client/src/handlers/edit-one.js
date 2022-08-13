import { state } from '../../data/state.js';
import {
	ADD_CONTACT,
	EDIT_CONTACT,
	CONTACT_LIST,
	NAME_INPUT,
	DBLCLICK,
	SAVE_CONTACT,
} from '../../data/constants.js';
import { addContact } from './add-contact.js';

export const saveNew = () => {
	let editItem = NAME_INPUT.value;

	console.log(editItem);
};
