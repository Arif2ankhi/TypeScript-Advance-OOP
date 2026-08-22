interface Employee {
    name: string
    onDuty: boolean
}



const findOnDutyEmployees = (employees:Employee[]):Employee => {

    const onDutyEmp:Employee[] = employees.filter(employee => employee.onDuty === true)
    return onDutyEmp

}


console.log(findOnDutyEmployees([{name:'Lima', onDuty:false}, {name:'Karim', onDuty:true}]));