var view = $("#tslshow");
move = 132
var sliderLimit = -800
let test = document.getElementById('tslshow')
let base = 0

let setSliderLimit = (input) => {
    nput = input - 1178 //default fullscren minus one div
    console.log(input, "impit")
    sliderLimit = (nput >= 0) ? -nput : 0;

}
function animateTo(elem, loc) {
    var left = parseInt(elem.style.left, 10) || 0;
    let end = loc
    elem.animate([
        { left: `${left}px` }, 
        { left: `${end}px` }, 
      ], { 
        duration: 200, //time in ms
      });
    elem.style.left = `${end}px`;

}
function animatio(elem, move, direction) {
    var left = parseInt(elem.style.left, 10) || 0;
    let end
    if (direction === 'left'){
        // explanation below just reversed
        end = (left + move <= base) ? left + move : base;
    } else {
        // ternary op for if value is greater than the limit set it to limit else do current val - move amount 
        end = (left - move >= sliderLimit) ? left - move : sliderLimit;
    }

    elem.animate([
        { left: `${left}px` }, 
        { left: `${end}px` }, 
      ], { 
        duration: 200, //time in ms
      });
    elem.style.left = `${end}px`;
}


$("#rightArrow").click(function(){
    animatio(test, move, "right")
});

$("#leftArrow").click(function(){
    animatio(test, move, "left")

});

document.getElementById("leftArrow").addEventListener('dblclick', function(){
    animateTo(test, 0)
}, false);
document.getElementById("rightArrow").addEventListener('dblclick', function(){
    animateTo(test, sliderLimit)
}, false);

let width = document.getElementById('tslshow')
// add min max