import { NAME_INPUT, REMOVE_CONTACT, EDIT_CONTACT } from '../data/constants.js';

//add contact

import { listenersContact } from './listeners/add-contact.js';
listenersContact(document.getElementById(NAME_INPUT));

// Remove contact

import { removeButton } from './listeners/remove-one.js';
removeButton(document.getElementById(REMOVE_CONTACT));

// Edit contact

import { editContact } from './listeners/edit-one.js';
editContact(document.getElementById(EDIT_CONTACT));
