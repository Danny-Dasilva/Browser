
move = 132
var sliderLimit = -1670
let test = document.getElementById('tslshow')
let base = 0
let view = document.getElementById('tslshow')
function setSliderLimit(input) {
    nput = input - view.clientWidth + 50//default fullscren minus one div

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
let isDragging = false
// document.getElementById("leftArrow").addEventListener('mouseenter', function(){
//     animatio(test, 1, "left")
//     console.log("called")
    
// }, false);


function repeatWhileMouseOver(element, action, time) {
    var interval = null;
    element.addEventListener('mouseover', function() {
        interval = setInterval(action, time);
    });

    element.addEventListener('mouseout', function() {
        clearInterval(interval);
    });
}
let tab 
let changethething
let vector 
let yeet
let originalTabPositionXX
let closesst
let tabPositionss
let increment = 0
function goLeft() {
    
    console.log('called')
    if (isDragging === true) {
        animatio(test, 1.5, "left")
        let current = parseInt(tab.style.left, 10)
        tab.style.left = `${current - 1.5}px`
        increment = increment - 2
        console.log(tab.style.left)
        const tabEls = changethething.tabEls
        
        
        const currentIndex = tabEls.indexOf(yeet)
        
        const currentTabPositionX = originalTabPositionXX + vector + increment
     
        const destinationIndexTarget = closesst(currentTabPositionX, tabPositionss)
        const destinationIndex = Math.max(0, Math.min(tabEls.length, destinationIndexTarget))
       
        if (currentIndex !== destinationIndex) {
            changethething.animateTabMove(yeet, currentIndex, destinationIndex)
         
        }

     
    }
    
}
function goRight() {
    
    console.log('called')
    if (isDragging === true) {
        animatio(test, 1.5, "right")
        let current = parseInt(tab.style.left, 10)
        tab.style.left = `${current + 1.5}px`
        increment = increment + 1
        console.log(tab.style.left, increment, vector)
        const tabEls = changethething.tabEls
        
        
        const currentIndex = tabEls.indexOf(yeet)
        
        const currentTabPositionX = originalTabPositionXX + vector + increment

        const destinationIndexTarget = closesst(currentTabPositionX, tabPositionss)
        const destinationIndex = Math.max(0, Math.min(tabEls.length, destinationIndexTarget))
    
        if (currentIndex !== destinationIndex) {
            changethething.animateTabMove(yeet, currentIndex, destinationIndex)
          
        }

     
    }
    
}

repeatWhileMouseOver(document.getElementById("leftArrow"), goLeft, 1);
repeatWhileMouseOver(document.getElementById("rightArrow"), goRight,  1);





function setViewport(position) {
    setSliderLimit(position)
    
    if (position >= view.clientWidth) {

    animateTo(test, sliderLimit, "sliderliomit")
    document.getElementById('tab-window').style.width = `${ position +132 }px`;

    } else {
    animateTo(test, 0)
    document.getElementById('tab-window').style.width = `${ view.clientWidth }px`;
    }
}