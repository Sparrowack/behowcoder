//asdasd
function printList (list)
{
  while (list)
  {
    console.log(list.value);
    list=list.next;
  }
}

function printListRec (list)
{
  if(list) 
    {   
      console.log(list.value);  
      printListRec(list.next);
    }
}

function printReverseList(list)
{
  var arr = [];
  var list = list;

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

function printReverseListRec(list)
{
  if(list.next) 
    {     
      printReverseListRec(list.next);
    }
  console.log(list.value);
}


