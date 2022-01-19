let circle = document.querySelector('.circle')
let box = document.querySelector('.box')
let circleWidth = 100;
let boxWidth = 500;
circle.style.width = circleWidth + 'px'
box.style.width = boxWidth + 'px'

let circleHeight = 100;
let boxHeight = 500
circle.style.height = circleHeight + 'px'
box.style.height = boxHeight + 'px'



let move = 1

let x = circle.style.left;
let y = circle.style.top;
circle.style.left =0
circle.style.top = 0


window.addEventListener('keydown', function(e){
    if((e.key == 'ArrowRight') && (x< (boxWidth - circleWidth )) ) {
        circle.style.left = parseInt(circle.style.left) + move +'px'
        x++
    }
    if((e.key == 'ArrowLeft') && (x>0)){
        circle.style.left = parseInt(circle.style.left) - move +'px'
        x--
    }
    if((e.key == 'ArrowDown') && (y< (boxHeight - circleHeight ))){
        circle.style.top = parseInt(circle.style.top) + move +'px'
        y++

    }
    if((e.key == 'ArrowUp') && (y>0 )){
        circle.style.top = parseInt(circle.style.top) - move +'px'
        y--
    }
    
})

