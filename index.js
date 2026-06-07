const display = document.getElementById("display");


function addToDisplay(input){
    display.value +=input;
}

function result(){
    try{
        display.value =  eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}
function reset(){
    display.value = "";
}