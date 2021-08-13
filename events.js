function makeMeRed() {
    document.body.style.backgroundColor = 'red';
}
// **************

const blue = document.getElementById('Make-Me-Blue');
blue.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// *************************


const green = document.getElementById('Make-Me-Green');
green.onclick = function (){
    document.body.style.backgroundColor = 'green';
} 
// *****************************

const goldenRod = document.getElementById('Make-Me-GoldenRod')

goldenRod.addEventListener('click',makeGoldenRod);

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod'
}

// *********

const hotPink = document.getElementById('Make-Me-HotPink');

hotPink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})

// ************

document.getElementById('Make-Me-LightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})