import { state } from '../../data/state.js';

export const removeOne = () => {
	const parentList = state.removeList;
	const userConfirm = confirm('"Are you sure?"');
	if (userConfirm === true) {
		parentList.remove();
	} else {
		false;
	}
};
