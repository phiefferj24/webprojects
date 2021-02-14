var i = 0;
var ob = 0;
var p1 = "";
var p2 = "";
function handleClick(x) {
    switch(x) {
        case "Clear":
            clear();
            break;
        case "*":
        case "/":
        case "+":
        case "-":
            operation(x);
            break;
        case "=":
            p1 = equals();
            break;
        default:
            number(x);
            break;
    }
}
function operation(x) {
    if(i) {
        i = 0;
        p1 = equals();
        p2 = "";
    }
    else i++;
    switch(x) {
        case "*": ob=1; break;
        case "/": ob=2; break;
        case "+": ob=3; break;
        case "-": ob=4; break;
    }
}
function number(x) {
    if(!i) {
        p1 += x;
        document.getElementById("result").innerHTML = p1;
    }
    else {
        p2 += x;
        document.getElementById("result").innerHTML = p2;
    }
}
function equals() {
    var r = "";
    switch(ob) {
        case 1: r += parseFloat(p1)*parseFloat(p2); break;
        case 2: r += parseFloat(p1)/parseFloat(p2=="0"?1:p2); break;
        case 3: r += parseFloat(p1)+parseFloat(p2); break;
        case 4: r += parseFloat(p1)-parseFloat(p2); break;
        default: r += parseFloat(p1); break;
    }
    document.getElementById("result").innerHTML = r.length>8?r.substring(0, 8):r;
    return r;
}
function start() {
    for(const x of document.querySelectorAll(".displayitem")) {
        x.addEventListener("click", ()=>handleClick(x.innerHTML));
    }
    document.getElementById("clear").addEventListener("click", ()=>handleClick("Clear"));
}
function clear() {
    i = 0;
    ob = 0;
    p1 = "";
    p2 = "";
    document.getElementById("result").innerHTML = "";
}  
start();