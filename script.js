let count = 0;
let count1 = 0;
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

function plusthree(){
    count+= 3;
    idOne.textContent = count;
}

function Clear() {
    count= 0;
    idOne.textContent = count;
}



/*  Away function */

function increment1() {
    count1++
    idTwo.textContent = count1;
}


function plustwo1() {
    count1+= 2;
    idTwo.textContent = count1;
}

function plusthree1() {
    count1+= 3;
    idTwo.textContent = count1;
}

function Clear1() {
    count1 = 0;
    idTwo.textContent = count1;
}