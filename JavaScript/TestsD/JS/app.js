function ensure(value) {
    if(value==null || value==undefined){
        throw new Error()
    }
    else return value;
}

//2 Remove Property
function removeProperty(obj, prop) {
    if(obj.hasOwnProperty(prop)){
        delete obj[prop];
    }
}

//3 Date
function formatDate(userDate) {
    var arrDate = userDate.split("/");

    if(arrDate[1] < 10) arrDate[1]=0+arrDate[1];
    if(arrDate[0] < 10) arrDate[0]=0+arrDate[0];
    return arrDate[2]+arrDate[0] + arrDate[1];
}

//4 Image Gallery
function setup() {
    var elm = document.getElementsByClassName("remove");

    for(var i = 0; i < elm.length; i++){
        elm[i].addEventListener('click', function(){
            this.parentNode.parentNode.removeChild(this.parentNode);

        }, false);

    }

}
setup();
//5 Closures

function registerHandlers() {
    var links = document.getElementsByTagName('a');

    for (var i = 0, len = links.length; i < len; i ++) {
        links[i].onclick = generateHandler(i);
    }

    function generateHandler (index) {
        return function () {
            alert(index);
            return false;
        }
    }
}
registerHandlers();
//6 Loops
function appendChildren() {
    var allDivs = document.getElementsByTagName("div");
    console.log(allDivs);
    //make copy
    //if you don't do this, you are adding to a live array
    //which will cause an infinite loop

    allDivs = [].slice.call(allDivs, 0);
    for (var i = 0; i < allDivs.length; i++) {
        var newDiv = document.createElement("div");
        allDivs[i].appendChild(newDiv);
    }
}

appendChildren();

//7 Add Digits
function addDigits() {

    var value = 55555,
        count = 0,
        sum = 0;
    console.log(value + " Value");
    var count = value.toString().length;
    var digits = (""+value).split("");
    //console.log(digits + " Digits");
    for(var i = 0; i < count ; i++){
        digits.push();
    }
    console.log(sum + " Sum");

}
addDigits();