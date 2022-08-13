export const randomColor = () => {
	const colors = [
		'#75026e',
		'#059c16',
		'#000770',
		'#7a3e02',
		'#036b64',
		'#505e2d',
		'#e30909',
		'#b05e0c',
	];
	return colors[Math.floor(Math.random() * colors.length)];
};
