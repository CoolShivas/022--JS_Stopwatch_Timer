let startCounting = 0; // Previously,the startCounting variable is declared inside the handlerOnStartBtn function.
// // // // Therefore, the reset btn is show the 0 one time and then continue startCounting from that number only not from 0;
// // // // So, we have declare the startCounting variable outside the block scope to function scope to be accessible to all funciton;

let interValID; // Making accessible to all;

//=====////=====// Starting of taking the references of all id's and classes. //=====////=====//

const accCountDown = document.getElementById("countDown");
// console.log(accCountDown); // Getting the p tag on console;
const accStartBtn = document.querySelector(".start_btn");
// console.log(accStartBtn); // Getting the btn tag on console;
const accResetBtn = document.querySelector(".reset_btn");
// console.log(accResetBtn); // Getting the btn tag on console;
const accStopBtn = document.querySelector(".stop_btn");
// console.log(accStopBtn); // Getting the btn tag on console;
const accGetTimeBtn = document.querySelector(".time_btn");
// console.log(accGetTimeBtn); // Getting the btn tag on console;
const accClearBtn = document.querySelector(".clear_btn");
// console.log(accClearBtn); // Getting the btn tag on console;
const accResetValue = document.querySelector(".resetValue");
// console.log(accResetValue); // Getting the btn tag on console;

//=====////=====// Ending of taking the references of all id's and classes. //=====////=====//

//////*******************************************************************************************************//////
//////*******************************************************************************************************//////

//=====////=====// Starting of defining the functions and firing on event listeners. //=====////=====//

// // // // FUNCTION TO START THE TIMER :-

const handlerOnStartBtn = () => {
  // let startCounting = 0; // Declaring the variable with assign 0 value;
  interValID = setInterval(() => {
    accCountDown.textContent = startCounting++; // Accessing the countDown id of p tag and adding the text to start count;
  }, 1000); // Wrapping the countDown to setInterval for calling it repeatedly on every 1 second;
};

////////------------------------------------------------------------------------------------

// // // // FUNCTION TO RESET THE TIMER :-

const handlerOnResetBtn = () => {
  startCounting = 0; // Reassigning the startCounting variable to 0;
  accCountDown.textContent = startCounting; // Accessing the countDown id of p tag and adding the text to reset count to 0;
  clearInterval(interValID); // Clearing the setInterval to stop on reset btn and only show 0; Previously, it was showing the 0 one time and continuously counting again;
};

////////------------------------------------------------------------------------------------

// // // // FUNCTION TO STOP THE TIMER IN BETWEEN THE COUNTING AND CLICK ON START BTN AGAIN TO CONTINUE COUNTING NOT FROM ZERO :-

const handlerOnStopBtn = () => {
  handlerOnGetTimeBtn(); // Whenever the user click on stop btn also wanted to print or show that counted value on display; Or also printing the stop counted value;
  accCountDown.textContent = startCounting; // Accessing the countDown id of p tag and adding the text to stop count. If again click to start btn start counting from the stop value not from 0;
  clearInterval(interValID); // Clearing the setInterval to stop on continuous counting on stop btn or take a pause;
};

////////------------------------------------------------------------------------------------

// // // // FUNCTION TO GET TIME MEANS THAT IF USER CLICK ON GET TIME BTN HE/SHE GET THE STOPPED COUNT VALUE PRINTED ON THE SCREEN DOWN-WARD :-

const handlerOnGetTimeBtn = () => {
  // accResetValue.textContent = startCounting; // Getting value printed on the display after clear time button;
  // // // Therefore, if you click the btn getTime the counted display number print on the below after clear time button;
  let paraElem = document.createElement("p"); // Created new element i.e., p tag;
  paraElem.classList.add("getTimeValue"); // Given className to new element;
  // paraElem.textContent = startCounting; // Giving the current countDown value of display to be printed on new element;
  // console.log(paraElem); // Getting printed countDowns on console whenever we click getTime btn;
  // paraElem.textContent = `The getTime value is ${startCounting - 1}`; // With the help of Template Literals we have passed the text with exact value of getTime on click; Previously, when we click on the getTime btn we get the previous value not the current one;
  paraElem.textContent = `The getTime value is ${startCounting}`;
  accResetValue.append(paraElem); // Pushing the getTime value on resetValue id p tag with new element form i.e., p tag with className getTimeValue;
};

////////------------------------------------------------------------------------------------

// // // // FUNCTION TO CLEAR THE TIME OF PRINTED VALUE ON THE BELOW DISPLAY/SCREEN :-

const handlerOnClearTimeBtn = () => {
  accResetValue.innerHTML = ""; // Clearing all the printed timer values i.e., present below the clearTime btn of main display
};

//=====////=====// Ending of defining the functions and firing on event listeners. //=====////=====//

//////*******************************************************************************************************//////
//////*******************************************************************************************************//////

//=====////=====// Starting of firing the even listeners on a click. //=====////=====//

accStartBtn.addEventListener("click", handlerOnStartBtn); // Firing the event listener on click and calling the function handlerOnStartBtn;
accResetBtn.addEventListener("click", handlerOnResetBtn); // Firing the event listener on click and calling the function handlerOnResetBtn;
accStopBtn.addEventListener("click", handlerOnStopBtn); // Firing the event listener on click and calling the function handlerOnStopBtn;
accGetTimeBtn.addEventListener("click", handlerOnGetTimeBtn); // Firing the event listener on click and calling the function handlerOnGetTimeBtn;
accClearBtn.addEventListener("click", handlerOnClearTimeBtn); // Firing the event listener on click and calling the function handlerOnClearTimeBtn;

//=====////=====// Ending of firing the even listeners on a click. //=====////=====//

//////*******************************************************************************************************//////
//////*******************************************************************************************************//////
