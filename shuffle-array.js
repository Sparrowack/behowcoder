function getRandomArbitrary(min, max) {
	rnd=Math.floor(Math.random() * (max - min)) + min;
	console.log(rnd);
  	return Math.floor(Math.random() * (max - min)) + min;
 	// return Math.random() * (max - min) + min;
}
function shufflearray(a,b)
{
	return getRandomArbitrary(-1,2);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(shufflearray)
console.log(arr)