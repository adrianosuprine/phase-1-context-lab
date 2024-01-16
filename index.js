/* Your Code Here */

// Function to find employee record by first name
const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find(employee => employee.firstName === firstName);
};

// Function to calculate pay for a specific date
const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};


// Function to calculate total pay for all dates worked by an employee
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(event => event.date);

    const totalWages = eligibleDates.reduce((total, date) => {
        return total + wagesEarnedOnDate.call(this, date);
    }, 0);

    return totalWages;
};

function createEmployeeRecord(employeeArray){
    return {
        firstName:employeeArray[0],
        familyName:employeeArray[1],
        title:employeeArray[2],
        payPerHour:employeeArray[3],
        timeInEvents:[],
        timeOutEvents:[]

    };
}




// Function to create employee records from an array of arrays
function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(createEmployeeRecord);

}
// Function to add a time-in event to an employee's record
const createTimeInEvent = function (dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour, 10) });
    return this;
};

// Function to add a time-out event to an employee's record
const createTimeOutEvent = function (dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');
    this.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour, 10) });
    return this;
};

// Function to calculate hours worked on a specific date
const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    return (timeOutEvent.hour - timeInEvent.hour) / 100;
};

// Function to calculate total pay for all employees
const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => {
        return totalPayroll + allWagesFor.call(employee);
    }, 0);
};

module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll,
};


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

