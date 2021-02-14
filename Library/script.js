var books = [];
var table = [];
class Book {
    constructor(x, y, z) {
        this.name = x;
        this.author = y;
        this.pages = z;
        this.read = false;
    }
}
function addBookToLibrary(x) {
    if(x.name == "") return;
    books.push(x);
    var tr = document.createElement("tr");
    var bn1 = document.createElement("td");
    bn1.innerHTML = x.name;
    var bn2 = document.createElement("td");
    bn2.innerHTML = x.author;
    var bn3 = document.createElement("td");
    bn3.innerHTML = x.pages;
    var rb = document.createElement("td");
    rb.innerHTML = "Read"
    rb.style.cssText = "background-color: red";
    rb.addEventListener("click", e=>handleRead(e));
    var sb = document.createElement("td");
    sb.innerHTML = "Delete"
    sb.addEventListener("click", e=>remove(e));
    tr.appendChild(bn1);
    tr.appendChild(bn2);
    tr.appendChild(bn3);
    tr.appendChild(rb);
    tr.appendChild(sb);
    table.push(tr);
    document.querySelector(".booktable").appendChild(tr);
}
function handleBook() {
    addBookToLibrary(new Book(document.querySelector(".text-title").value, document.querySelector(".text-author").value, document.querySelector(".text-pages").value));
    document.querySelector(".text-title").value = "";
    document.querySelector(".text-author").value = "";
    document.querySelector(".text-pages").value = "";
}
function start() {
    document.querySelector(".button").addEventListener("click", ()=>handleBook());
}
function remove(x) {
    books.splice(table.indexOf(x.target.parentNode), 1);
    table.splice(table.indexOf(x.target.parentNode), 1);
    x.target.parentNode.remove();
}
function printArrays() {
    books.forEach(x=>console.log(x.name));
}
function handleRead(x) {
    books[table.indexOf(x.target.parentNode)].read = !books[table.indexOf(x.target.parentNode)].read;
    if(books[table.indexOf(x.target.parentNode)].read) {
        x.target.style.cssText = "background-color: green";
    }
    else {
        x.target.style.cssText = "background-color: red";
    }
}
start();