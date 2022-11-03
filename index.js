let countEl = document.getElementById("count-el")
let countTwoEl = document.getElementById("counttwo-el")
let countHome = 0
let countAway = 0

function addOnePoint(){
    countHome += 1
    countEl.textContent = countHome
}

function addTwoPoints(){
    countHome += 2
    countEl.textContent = countHome
}

function addThreePoints(){
    countHome += 3
    countEl.textContent = countHome
}
function addOnePointAway(){
    countAway += 1
    countTwoEl.textContent = countAway
}

function addTwoPointsAway(){
    countAway += 2
    countTwoEl.textContent = countAway
}

function addThreePointsAway(){
    countAway += 3
    countTwoEl.textContent = countAway
}

function resetCounter(){
    countEl.textContent = 0
    countHome = 0
    countTwoEl.textContent = 0
    countAway = 0
}



