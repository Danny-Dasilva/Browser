var view = $("#tslshow");
var move = "100px";
move1 = 100
var sliderLimit = -750
let test = document.getElementById('tslshow')



function animatio(elem, move, direction) {
    var left = parseInt(elem.style.left, 10) || 0
    let end
    if (direction === 'left'){
        end = left + move 
    } else {
        end = left - move
    }

    elem.animate([
        { left: `${left}px` }, 
        { left: `${end}px` }, 
      ], { 
        duration: 200, //time in ms
      });
    elem.style.left = `${end}px`
}


$("#rightArrow").click(function(){
    console.log(view.css("left"))
    animatio(test, move1, "right")
    // var currentPosition = parseInt(view.css("left"));
    // if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 200})

});

$("#leftArrow").click(function(){
    animatio(test, move1, "left")

});

