// Home Screen
let addBtn = document.getElementById("screen");

let addOne = 0;

function plusOne() {
    addOne += 1;
    addBtn.textContent = addOne;
}
function plusTwo() {
    addOne += 2;
    addBtn.textContent = addOne;
}
function plusThree() {
    addOne += 3;
    addBtn.textContent = addOne;
}
function resetHome() {
    addOne = 0;
    addBtn.textContent = 0;
}


// Guest Screen
let addGuestBtn = document.getElementById("screenGuest");

function plusOneGuest() {
    addOne += 1;
    addGuestBtn.textContent = addOne;
}
function plusTwoGuest() {
    addOne += 2;
    addGuestBtn.textContent = addOne;
}
function plusThreeGuest() {
    addOne += 3;
    addGuestBtn.textContent = addOne;
}
function resetGuest() {
    addOne = 0;
    addGuestBtn.textContent = 0;
}














//works but the btns when clicked add differently
// Home screen

// let screenEl = document.getElementById("screen");

// let addOne = 0;

// function plusOne() {
//     addOne += 1;
//     console.log(addOne);
//     screenEl.textContent = addOne;

// }

// let addTwo = 0;

// function plusTwo() {
//     addTwo += 2;
//     console.log(addTwo);

//     screenEl.textContent = addTwo;
// }

// let addThree = 0;

// function plusThree() {
//     addThree += 3;
//     console.log(addThree);

//     screenEl.textContent = addThree;
// }

// function resetHome() {
//     screenEl.textContent = 0;
// }






// //Guest screen
// let screenGuestEL = document.getElementById("screenGuest");

// let addOneGuest = 0;

// function plusOneGuest() {
//     addOneGuest += 1;
//     console.log(addOneGuest);
//     screenGuestEL.textContent = addOneGuest;
// }


// let addTwoGuest = 0;

// function plusTwoGuest() {
//     addTwoGuest += 2;
//     console.log(addTwoGuest);

//     screenGuestEL.textContent = addTwoGuest;
// }


// let addThreeGuest = 0;

// function plusThreeGuest() {
//     addThreeGuest += 3;
//     console.log(addThreeGuest);

//     screenGuestEL.textContent = addThreeGuest;
// }

// function resetGuest() {
//     screenGuestEL.textContent = 0;
// }