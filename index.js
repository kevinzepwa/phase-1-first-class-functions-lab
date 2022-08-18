// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
// Code your solution in this file!
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(anInteger){
    return function(fare) {
        return (anInteger * fare)
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, selectFunction) {
    return selectFunction(arrayOfDrivers)
}