var view = $("#tslshow");
var move = "100px";
move1 = 100
var sliderLimit = -800
let test = document.getElementById('tslshow')
let base = 0


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
    animatio(test, move1, "right")
});

$("#leftArrow").click(function(){
    animatio(test, move1, "left")

});

// add min max