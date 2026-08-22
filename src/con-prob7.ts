
type Distance = {
    total:number
    average:number
}

const getDistanceSummary = (distance:number[]): Distance => {

    const total:number = distance.reduce((sum, num) => sum + num , 0)
    const average:number = total/distance.length

    return {
        total,
        average : isNaN(average) ? 0 : average
    }

}

console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([]));