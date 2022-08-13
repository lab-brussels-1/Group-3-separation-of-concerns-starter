import { state } from '../../data/state.js';

// Remove One item function

export const removeOne = () => {
	const parentList = state.removeList;

	// eslint-disable-next-line no-restricted-globals

	const userConfirm = window.confirm('"Are you sure?"');
	if (userConfirm === true) {
		parentList.remove();
	}
};
