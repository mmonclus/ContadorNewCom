let scoreA = 0;
let scoreB = 0;

function updateScore() {
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

function increaseScore(team) {
    if (team === 'A') {
        scoreA++;
    } else if (team === 'B') {
        scoreB++;
    }
    updateScore();
}

function decreaseScore(team) {
    if (team === 'A' && scoreA > 0) {
        scoreA--;
    } else if (team === 'B' && scoreB > 0) {
        scoreB--;
    }
    updateScore();
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    updateScore();
}
