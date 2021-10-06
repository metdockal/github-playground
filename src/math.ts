export const sum = (numbers: number[]) => {
	let sum = 0;
	for (const number of numbers) {
		sum += number;
	}
	return sum;
};

export const areaOfTriangle = (base: number, height: number) => {
	return 0.5 * base * height;
};
