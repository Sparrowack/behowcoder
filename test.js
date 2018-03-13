var object1 = {
className: "open menu"
};
function addClass(obj, cls) {
  var exist = true;
  for (var key in obj) {
  var arr=obj[key].split(" ");
      }
      for (var i=0; i<arr.length; i++) {
      console.log(arr.length);
      console.log(arr[i]);
        if (arr[i]==cls) 
          {
          exist = false ;
          return arr;
          }
        if (exist) 
          {
          arr.push(cls);
          }
        
      }
  return arr;
}
console.log(addClass(object1, "george"));