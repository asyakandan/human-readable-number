module.exports = function toReadable (number) {
    const str = number.toString();
	const num1 = str[0];
	const num2 = str[1];
	const num3 = str[2];
	const lastTwoDigit = str.slice(1, 3);
	const arr1 = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
	const arr2 = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
	const arr3 = 'hundred'.split(' ');

    if (number <= 19) {
        return arr1[number];
    } else if (str.length == 2) {
        if (num2 == 0) {
            return arr2[num1 - 2];
        } else {
            return `${arr2[num1 - 2]} ${arr1[num2]}`;
        }
    } else if (str.length == 3) {
        if (num2 == 0 && num3 == 0) {
            return `${arr1[num1]} ${arr3[0]}`;
        } else if (lastTwoDigit <= 9) {
            return `${arr1[num1]} ${arr3[0]} ${arr1[num3]}`;
        } else if (lastTwoDigit <= 19) {
            return `${arr1[num1]} ${arr3[0]} ${arr1[lastTwoDigit]}`;
        } else if (num2 != 0 && num3 == 0) {
            return `${arr1[num1]} ${arr3[0]} ${arr2[num2 - 2]}`;
        } else if (num2 != 0 && num3 != 0) {
            return `${arr1[num1]} ${arr3[0]} ${arr2[num2 - 2]} ${arr1[num3]}`;
        }
    }
}
