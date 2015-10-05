window.onload = function() {
    $("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    $("boundary1").addClassName("youlose");
}

window.onload = function() {
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#ff8888";
    }
}

var loser = false;  

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}

