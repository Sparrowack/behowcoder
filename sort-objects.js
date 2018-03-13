function sortObjects(a,b)
{
	if (a.age>b.age) return true;
	if (a.age<b.age) return false;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(sortObjects);
console.log(people);