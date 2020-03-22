const div = document.querySelector('div');
let width = window.innerWidth / 2;
let height = window.innerHeight / 2;
let drawActive = false;
let insertDivX;
let insertDivY;
div.style.top = height - 100 + "px"
div.style.left = width - 100 + "px"

div.addEventListener('mousedown', function (e) {
    div.style.backgroundColor = 'grey';
    drawActive = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

})
div.addEventListener('mousemove', function (e) {
    if (drawActive) {
        const x = e.clientX - insertDivX;
        const y = e.clientY - insertDivY;
        div.style.top = y + "px";
        div.style.left = x + "px";
    }
})
div.addEventListener("mouseup", function () {
    div.style.backgroundColor = "black";
    drawActive = false;
})