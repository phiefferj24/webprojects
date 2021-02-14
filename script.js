const pages = [
    "Calculator",
    "EtchASketch",
    "Library",
    "RockPaperScissors"
]
function start() {
    pages.forEach(e=>{
        var p1 = document.createElement("a");
        p1.innerHTML = "<h1>"+e+"</h1>";
        p1.setAttribute("href", e);
        document.querySelector(".links").appendChild(p1);
    });
}
start();