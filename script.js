let count = 0;
//home
let idOne = document.getElementById("input-one");

//away 
let idTwo = document.getElementById("input-two");

/* Home function*/

function increment() {
    count++
    idOne.textContent = count;
}

function plustwo() {
    count+= 2;
    idOne.textContent = count;
}

function Clear() {
    count= 0;
    idOne.textContent = count;
}

function plusthree(){
    count+= 3;
    idOne.textContent = count;
}

/*  Away function */

function increment1() {
    count++
    idTwo.textContent = count;
}


function plustwo1() {
    count+= 2;
    idTwo.textContent = count;
}

function plusthree1() {
    count+= 3;
    idTwo.textContent = count;
}