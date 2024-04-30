
let displayvalue=''
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
displayvalue = displayvalue.substring(displayvalue.length-1,0);
    document.getElementById('display').value = displayvalue;

}


function clearLastElement() {
    displayvalue = displayvalue.substring(displayvalue.length-1,0);
        document.getElementById('display').value = displayvalue;
    }

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
} 