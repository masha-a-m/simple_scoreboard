// Home screen

let screenEl = document.getElementById("screen");

let addOne = 0;

function plusOne() {
    addOne += 1;
    console.log(addOne);
    screenEl.textContent = addOne;
}


let addTwo = 0;

function plusTwo() {
    addTwo += 2;
    console.log(addTwo);

    screenEl.textContent = addTwo;
}


let addThree = 0;

function plusThree() {
    addThree += 3;
    console.log(addThree);

    screenEl.textContent = addThree;
}

//Guest screen
let screenGuestEL = document.getElementById("screenGuest");

let addOneGuest = 0;

function plusOneGuest() {
    addOneGuest += 1;
    console.log(addOneGuest);
    screenGuestEL.textContent = addOneGuest;
}


let addTwoGuest = 0;

function plusTwoGuest() {
    addTwoGuest += 2;
    console.log(addTwoGuest);

    screenGuestEL.textContent = addTwoGuest;
}


let addThreeGuest = 0;

function plusThreeGuest() {
    addThreeGuest += 3;
    console.log(addThreeGuest);

    screenGuestEL.textContent = addThreeGuest;
}