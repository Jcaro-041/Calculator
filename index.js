window.onload = init();

// initializes the buttons so they are all active and ready to use

function init(){
    number1Field = document.getElementById("number1Field");
    number2Field = document.getElementById("number2Field");
    Add.onclick = onAddBtnClick;
    Subtract.onclick = onSubtractBtnClick;
    Multiply.onclick = onMultiplyBtnClick;
    Divide.onclick = onDivideBtnClick;
    ClearAnswer.onclick = onClearAnswerBtnClick;
    ClearAll.onclick = onClearAllBtnClick;
}

// when add button clicked it will run this script to add the inputs together

function onAddBtnClick(){
    answerField.value = parseInt(number1Field.value) + parseInt(number2Field.value);
}

// when subtract button clicked it will subtract the 2 inputs
function onSubtractBtnClick(){
    answerField.value = parseInt(number1Field.value) - parseInt(number2Field.value);
}

// when multiply button clicked it will subtract the 2 inputs
function onMultiplyBtnClick(){
    answerField.value = parseInt(number1Field.value) * parseInt(number2Field.value);
}

// when divide button clicked it will subtract the 2 inputs
function onDivideBtnClick(){
    answerField.value = parseInt(number1Field.value) / parseInt(number2Field.value);
}

// clears the answer field
function onClearAnswerBtnClick(){
    answerField.value = ("");
}

// clears every input field 
function onClearAllBtnClick(){
    answerField.value = ("");
    number1Field.value = ("");
    number2Field.value = ("");
}