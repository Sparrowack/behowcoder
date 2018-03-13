function sortPoint(arr)
{
	indx=0;
	var point = {x:0, y:0, z:0}
	for (k=0;k<arr.length;k++)
	{
	  for (i=indx; i<arr.length;i++)
	  {
	  	//var dist=Math.sqrt(Math.pow(arr[i].x-point[i].x,2)+Math.pow(arr.y[i]-point.y[i],2)+Math.pow(arr.z[i]-point.z[i],2));
	    var dist=0;    
	    for (j=indx; j<arr.length-1;j++)
	    {
	    	//console.log("Сравниваем:"+arr[j].x+"("+j+") и "+arr[j+1].x+"("+(j+1)+")");
	        var diff1 = Math.sqrt(Math.pow(arr[j].x-point.x,2)+Math.pow(arr[j].y-point.y,2)+Math.pow(arr[j].z-point.z,2));
	        var diff2 = Math.sqrt(Math.pow(arr[j+1].x-point.x,2)+Math.pow(arr[j+1].y-point.y,2)+Math.pow(arr[j+1].z-point.z,2));
	        if (diff2<diff1) 
	        	{
	        		dist=diff2;
	        		var temp=arr[j];
	        		arr[j]=arr[j+1];
	        		arr[j+1]=temp;
	        	}
	    }
	  }
	indx++;
	point=arr[k];
	}
	return arr;
}
var objectsArray = 	[{x:14, y:24, z:0},
			        {x:23, 	y:15, z:0},
			        {x:8,	y:16, z:0},
			        {x:18,	y:4,  z:0},
			        {x:22, 	y:11, z:0},
			        {x:9, 	y:27, z:0}];
console.log(sortPoint(objectsArray));
console.log(objectsArray);