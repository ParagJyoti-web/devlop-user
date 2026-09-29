function countAboveTarget(marks, target = 50) {
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < target) {
            continue; 
        }
        count++;
    }
    return count;
}


console.log(countAboveTarget([45, 60, 72, 38, 50]));
console.log(countAboveTarget([30, 40, 20], 30)); 