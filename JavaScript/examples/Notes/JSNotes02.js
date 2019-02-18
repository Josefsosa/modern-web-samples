//Javascript Algorithm Notes

//Recursicve Descent:
array = function () {
     var array = [];
     next('[');
     white();
     if (ch !== ']') {
          while (true) {
               array.push(value());
               white();
               if (ch === ']'){
                    break;
               }
               next(',');
               white();
          }
     }
     next(']');
     return array;
};
// Closer is the context of inner function includes the scope of the outer funtion.
// An inner funtion enjoys the context even after the parent functions have returned.
// One function applies closer over the variables of parent or another function.
// Not using Closure
var  digit_name = (function (n){
     var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
     return names[n];
};

alert(digit_name(3));

// With closure
var  digit_name = (function (){
     var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
     return function (n) {
          return names[n];
     };

}());

alert(digit_name(3));

// With closure and conditionals
var  digit_name = (function () {
     var names;
     return function (n) {
               if (!names) {
                    names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
               }
          }
          return names[n];
     };
}());

alert(digit_name(3));