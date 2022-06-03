var now = 0;
var elements = ["◯", "X"];
var hover = null;
var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var moves = []
var points = [0, 0]
var counter = 0;
function reInit(){
    points=[0,0]
    pointsShow();
    rePlay()
}

function rePlay(){
    now=0;
    for(var x = 0; x < moves.length; x++){
        if(moves[x]!== null){
            document.getElementById(x).innerHTML="";
        }
    }
    moves = [];
    counter=0;
}

function pointsShow(){
    document.getElementById('points').innerHTML = points[0] + ":" + points[1]
}
function hoverFN(o) {
    if (o.innerHTML == "") {
        o.innerHTML = elements[now];
        hover = o;
    }
}

function unHover() {
    if (hover != null) {
        hover.innerHTML = ""
    }
}

function move(o) {
    if(moves[o.id]===undefined){
        counter++;
        o.innerHTML = elements[now];
        hover = null;
        moves[o.id] = now;
        if(checkWin()){
            points[now] = points[now] + 1;
            pointsShow();
            setTimeout(function () {
                rePlay();
            },1000)
        }
        now = now === 0 ? 1 : 0;
    }
    if(counter===9){
        setTimeout(function () {
            rePlay();
        },750);
    }
}

function checkWin() {
    for (var j = 0; j < wins.length; j++) {
        var win = 0;
        for (var k = 0; k < wins[j].length; k++) {
            if (moves[wins[j][k]] === now) {
                win++;
            }
        }
        if (win === 3) {
            return true;
        }
    }
    return false;
}
