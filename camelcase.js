function camelize (str)
{
	//var str="";
	var words=str.split("-");
	var result=words[0];
	//console.log(words);
	for (var i=1;i<words.length;i++)
	{
		var newWord=words[i].charAt(0).toUpperCase();
		for (var j=1;j<words[i].length;j++)
		{
			newWord=newWord+words[i].charAt(j);
		}
		result = result+newWord;
	}
	return result;
}


console.log(camelize("borders-left-width-dat-ass"));

function filterRangeInPlace(arr){
	var sum=0;
	for (var i=0;i<arr.length;i++)
	{
		sum = arr[i]+sum;
		console.log(arr[i]);
	}
	return sum;
}
var arr=[];
for (var i=0;i<9;i++)
	{
		arr[i]=i;
		console.log(arr[i])
	}
console.log(filterRangeInPlace(arr))