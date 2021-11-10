const SC = document.getElementById('scorecont');
var scoredata = localStorage.getItem('score');

function append() {
    SC.innerHTML = scoredata + "out of ten";
}

append();