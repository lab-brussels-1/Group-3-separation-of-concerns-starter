import { state } from '../../data/state.js';
import { randomColor } from '../utils/add-contact.js';
import { CONTACT_LIST } from '../../data/constants.js';

export const addContact = (fullName) => {
	if (!fullName || !fullName.trim()) return;

	// created ul element

	const contactUl = document.createElement('ul');
	contactUl.setAttribute('class', 'contact-entry');

	const nameInitialLi = document.createElement('li');
	nameInitialLi.setAttribute('class', 'name-initial');
	nameInitialLi.textContent = fullName.charAt(0);
	nameInitialLi.style.backgroundColor = randomColor();

	const fullNameDiv = document.createElement('li');
	fullNameDiv.setAttribute('class', 'full-name');
	fullNameDiv.textContent = fullName;
	fullNameDiv.style.backgroundColor = randomColor();

	// append order

	contactUl.appendChild(nameInitialLi);
	contactUl.appendChild(fullNameDiv);

	document.getElementById(CONTACT_LIST).append(contactUl);

	// store in inputs in the data file
};
