//Basic Stuff
//JavaScript supports different kinds of loops:
//for - loops through a block of code a number of times
//for/in - loops through the properties of an object
//while - loops through a block of code while a specified condition is true
//do/while - also loops through a block of code while a specified condition is true
for (var i=0;i<cars.length;i++)
{ 
	document.write(cars[i] + "<br>");
}

var x = 2;
for (var i=0; i<5; i++)
  {
 	 x = x + "The number is " + i + "<br>";
  }

var i=2,len=cars.length;
for (; i<len; i++)
{ 
	document.write(cars[i] + "<br>");
}

//Gets Day
var day=new Date().getDay();
switch (day)
{
case 0:
  x="Today it's Sunday";
  break;
case 1:
  x="Today it's Monday";
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
}

var str="Is this all there is?";
var patt1=/is/gi;
document.write(str.match(patt1));

/*Iteration
Any algorithm that can be implemented using recursion can also be implemented using
iteration. Iterative algorithms typically consist of several different loops performing
different aspects of the process, and thus introduce their own performance issues.
However, using optimized loops in place of long-running recursive functions can result
in performance improvements due to the lower overhead of loops versus that of executing
a function.

As an example, the merge sort algorithm is most frequently implemented using recursion.
A simple JavaScript implementation of merge sort is as follows:
*/

function merge(left, right){
	var result = [];
	while (left.length > 0 && right.length > 0){
	if (left[0] < right[0]){
	result.push(left.shift());
	} else {
	result.push(right.shift());
	}
	}
	return result.concat(left).concat(right);
}

function mergeSort(items){
	if (items.length == 1) {
	return items;
	}
	var middle = Math.floor(items.length / 2),
	right = items.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

left = items.slice(0, middle


//uses the same mergeSort() function from previous example
function mergeSort(items){
	if (items.length == 1) {
	return items;
	}
	var work = [];
	for (var i=0, len=items.length; i < len; i++){
	work.push([items[i]]);
	}
	work.push([]); //in case of odd number of items
	for (var lim=len; lim > 1; lim = (lim+1)/2){
	for (var j=0,k=0; k < lim; j++, k+=2){
	work[j] = merge(work[k], work[k+1]);
	}
	work[j] = []; //in case of odd number of items
	}
	return work[0];
}

//You can rewrite the factorial() function to make use of memoization in the following
//way:
function memfactorial(n){
	if (!memfactorial.cache){
	memfactorial.cache = {
	"0": 1,
	"1": 1
	};
	}
	if (!memfactorial.cache.hasOwnProperty(n)){
	memfactorial.cache[n] = n * memfactorial (n-1);
	}
	return memfactorial.cache[n];
}