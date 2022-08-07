import { NAME_INPUT } from '../data/constants.js';
import { listenersContact } from './listeners/add-contact.js';

// add event listeners

listenersContact(document.getElementById(NAME_INPUT));
