function addition() {
    form1.c1.value = parseFloat(form1.a1.value)
        + parseFloat(form1.b1.value);
}
function subtraction() {
    form1.c1.value = parseFloat(form1.a1.value)
        - parseFloat(form1.b1.value);
}
function multiplication() {
    form1.c1.value = parseFloat(form1.a1.value)
        * parseFloat(form1.b1.value);
}
function division() {
    form1.c1.value = parseFloat(form1.a1.value)
        / parseFloat(form1.b1.value);
}
function square() {
    let result = 1;
    const numb1 = parseFloat(form1.a1.value);
    result = Math.sqrt(numb1);
    form1.c1.value = result;
}
function power() {
    let result = 1
    const numb1 = parseFloat(form1.a1.value);
    const numb2 = parseFloat(form1.b1.value);
    for (let i = 0; i < numb2; i++) {
        result *= numb1;
    }
    form1.c1.value = result;
}
// rekurencyjnie
function factorialRecursive(input) {
    if (input == 1) {
        return input;
    }
    return input * factorialRecursive(input - 1);
}
//iteracyjne 
function factorial() {
    var numb1 = parseFloat(prompt("Wprowad wartość z ktorej policzymy silnie"))+1; 
    let result = 1
    // const numb1 = parseFloat(form1.a1.value) + 1;
    for (let i = 1; i < numb1; i++) {
        result *= i;
    }
    alert("wynik to: " + result);
    // form1.c1.value = result;
}

function topChange() {
    div2.style.top = form2.p1.value + "px";
}

function leftChange() {
    div2.style.left = form2.p2.value + "px";
}

function backgroundChange(value) {
    div2.style.backgroundColor = value;
}

function borderStyleChange(value){
    const color = borderColor.value;
    const size = borderSize.value;
    div2.style.border = color + " " + value + " " + size + "px"
}

function borderColorChange(value) {
    const style = borderStyle.value;
    const size = borderSize.value;
    div2.style.border = style + "  " + value + " " + size + "px";
}

function borderSizeChange(value) {
    const color = borderColor.value;
    const style = borderStyle.value;
    div2.style.border = style + "  " + color + " " + value + "px";
}