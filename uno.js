function getResult(mark, passMark=40){
    if(mark >=80){
        return "A";
    }else if(mark >=60){
        return "B";
    }else if (mark >= passMark){
        return "c";
    }else{
        return "F";
    }
        
}
console.log(getResult(78));

function calulateTotal(numbers) {
    for (i=0, n=length,i=++)



}

function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

function getStatus(total, target = 100) {
    if (total >= target) {
        return "Target Reached";
    } else {
        return "Target Not Reached";
    }
}


console.log(calculateTotal([20, 35, 50]));




