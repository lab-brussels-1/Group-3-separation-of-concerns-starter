import { state } from '../../data/state.js';

// Remove One item function

export const removeOne = () => {
	const parentList = state.removeList;
	const userConfirm = confirm('"Are you sure?"');
	if (userConfirm === true) {
		parentList.remove();
	}
};
