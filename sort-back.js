function SortBack(a)
{
	for (var i=0; i<a.length;i++)
	{
		for (var j=0; j<a.length-1;j++)
		{
			if (a[j]<a[j+1])
			{
				var tmp=a[j+1];
				a[j+1]=a[j];
				a[j]=tmp;
			}
		}
	}
	return a;
}

var arr=[5, 2, 1, -10, 3];
console.log(SortBack(arr))