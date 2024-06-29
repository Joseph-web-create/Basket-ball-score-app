let count = 0;
let idOne = document.getElementById("input-one");

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