




const  getSignalStatus = (percentage:number):string => {
    if(percentage >= 0 && percentage <=25){
        return 'Poor'
    }else if (percentage >= 26 && percentage <=55){
        return 'Fair'
    }else if (percentage >= 56 && percentage <=85){
        return 'Good'
    }else {
        return 'Excellent'
    }

}

console.log(getSignalStatus(15));
console.log(getSignalStatus(45));
console.log(getSignalStatus(65));
console.log(getSignalStatus(95));