let scores = [10, 20, 30, 38, 40, 50];
console.log(scores);
scores.forEach(score => {
    if (score < 39) {
        console.log(score + 2);
    }
});

let withExtraPoints = scores.map (score => {
    if (score <= 40) {
        return score + 10;
    }   return score;
});

console.log(withExtraPoints);

let filteredScores = withExtraPoints.filter(score => score >= 50);
console.log("with Extra Points:", filteredScores);


let passingScores = scores.filter( score => score >= 50);
console.log("Normal Pass:", passingScores);



