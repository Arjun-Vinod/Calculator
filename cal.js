function addValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate(){
    const elements= document.getElementById('display').value;
    try{
    let newelements= elements.replace(/%/g,'/100');
    const result=eval(newelements);
    if(!isFinite(result)){
        throw new Error("can't divided by zero");
    }
    document.getElementById('display').value=result;
    }
    catch(error){
        document.getElementById('display').value='Error';
    }
}
