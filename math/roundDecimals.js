const expRound = (number, precision) => {
	const roundedNum = (Math.round(`${number}e${precision}`))
	return Number(`${roundedNum}e-${precision}`)
}

console.log(expRound(321.1125, 2)); //321.11
console.log(expRound(321.1125, 3)); //321.113