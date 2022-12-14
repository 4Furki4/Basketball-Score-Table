
let homeScore = 0;

let guestScore = 0;

let homeTitle = document.getElementById("home")

let guestTitle = document.getElementById("guest")

let homeEl = document.getElementById("homeScore");

let guestEl = document.getElementById("guestScore")

guestEl.textContent = guestScore;

homeEl.textContent = homeScore;

function plus1Home() {
    homeScore++
    homeEl.textContent = homeScore;
    highlight();
}
function plus2Home() {
    homeScore += 2
    homeEl.textContent = homeScore;
    highlight();
}
function plus3Home() {
    homeScore += 3
    homeEl.textContent = homeScore;
    highlight();
}

function plus1Guest() {
    guestScore++
    guestEl.textContent = guestScore;
    highlight();
}
function plus2Guest() {
    guestScore += 2
    guestEl.textContent = guestScore;
    highlight();
}
function plus3Guest() {
    guestScore += 3
    guestEl.textContent = guestScore;
    highlight();
}


function highlight () {

    if (guestScore > homeScore)
    {
        //underline the guest title and make it red but purge home's title style
        homeTitle.style.color = "#EEEEEE"
        guestTitle.style.color = "red" 
        guestTitle.style.textDecoration = "underline"
        homeTitle.style.textDecoration = "none"
    }
    else if(guestScore < homeScore)
    {
        //the reverse
        homeTitle.style.color = "red"
        guestTitle.style.color = "#EEEEEE"
        guestTitle.style.textDecoration = "none"
        homeTitle.style.textDecoration = "underline"
    }
    else
    {
        // purge all have been added
        purgeStyle()
    }
}

function restart() {
    guestScore = 0
    homeScore = 0
    guestEl.textContent = guestScore;
    homeEl.textContent = homeScore;
    purgeStyle()
}

function purgeStyle(){
    homeTitle.style.color = "#EEEEEE"
    guestTitle.style.color = "#EEEEEE"
    guestTitle.style.textDecoration = "none"
    homeTitle.style.textDecoration = "none"
}

