const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', function (e) {
    document.body.style.backgroundColor = 'red';
});
// 04

const makePink = document.getElementById('make-pink')

makePink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
})
// 04 another option

const makeGreen = document.getElementById('make-green')

makeGreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
});
// option final

document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'golden'
})