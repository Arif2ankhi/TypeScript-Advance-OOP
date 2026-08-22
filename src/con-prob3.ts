



const calculateWeeklySteps = (steps:number[]):number =>{
const total :number = steps.reduce((sum, num) => sum + num, 0)
return total
}


console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([]));
console.log(calculateWeeklySteps([3000, 5200]));