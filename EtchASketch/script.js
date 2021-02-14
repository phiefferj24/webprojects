var divgrid = [[]];
var upperdivs = [];
var boxsize = 32;
function createDivGrid(x, y) {
    divgrid = new Array(x);
    upperdivs = new Array(x);
    for(var i = 0; i < x; i++) {
        divgrid[i] = new Array(y);
    }
    boxsize = document.body.clientWidth/x/2;
}
function assignDivGrid() {
    document.querySelector(".divs").innerHTML = "";
    document.querySelector(".reset").addEventListener("click", () => clearGrid());
    document.querySelector(".divs").style.cssText = "display: grid; grid-template-columns: "+divgrid.length+"; grid-template-rows: "+divgrid[0].length+";";
    for(var i = 0; i < divgrid.length; i++) {
        upperdivs[i] = document.createElement("div");
        for(var j = 0; j < divgrid[0].length; j++) {
            divgrid[i][j] = document.createElement("div");
            divgrid[i][j].classList.add("divgrid");
            divgrid[i][j].style.cssText = "float: left; width: "+boxsize+"px; height: "+boxsize+"px; grid-column:"+(j+1)+";";
            divgrid[i][j].addEventListener("mouseenter", e => e.target.style.cssText += " background-color: black;");
            upperdivs[i].appendChild(divgrid[i][j]);
            upperdivs[i].style.cssText = "grid-row:"+(i+1)+";";
        }
        document.querySelector(".divs").appendChild(upperdivs[i]);
    }
}
function clearGrid() {
    divgrid = [[]];
    upperdivs = [];
    createDivGrid(parseInt(document.querySelector(".width").value)<=100?parseInt(document.querySelector(".width").value):100, parseInt(document.querySelector(".height").value)<=100?parseInt(document.querySelector(".height").value):100);
    assignDivGrid();
}
createDivGrid(16, 16);
assignDivGrid();
//background-color: rgb("+(i*16)+", 255, "+(j*16)+");