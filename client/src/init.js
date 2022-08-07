import { NAME_INPUT } from '../data/constants.js';

import { listenersContact } from './listeners/add-contact.js';
listenersContact(document.getElementById(NAME_INPUT));
