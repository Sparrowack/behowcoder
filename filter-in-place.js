function filterRangeInPlace(arr,a,b){
	for (var i = 0; i<arr.length; i++) {
		var val = arr[i];
	    if (val < a || val > b) {
	      arr.splice(i--, 1);
	    }
	};
	return arr;
}
var arr=[5,3,8,1,4];
console.log(filterRangeInPlace(arr,3,5))