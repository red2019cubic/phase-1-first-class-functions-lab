// Code your solution in this file!
const scooterTaxiClient = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (scooterTaxiClient)=>{
    const newClientList = [scooterTaxiClient[0],scooterTaxiClient[1]];
    return newClientList;
}

const returnLastTwoDrivers = (scooterTaxiClient)=>{
    const newClientList = [scooterTaxiClient[scooterTaxiClient.length-2],scooterTaxiClient[scooterTaxiClient.length-1]];
    return newClientList;
}

const selectingDrivers = [];
    
selectingDrivers[0] = returnFirstTwoDrivers;
selectingDrivers[1] = returnLastTwoDrivers;

function createFareMultiplier(number){
    return function(){
        return number * number;
    }
}
function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}
    
function selectDifferentDrivers(scooterTaxiClient, args) {
   
    if(args===returnFirstTwoDrivers){
      return returnFirstTwoDrivers(scooterTaxiClient);
    } else {
        return returnLastTwoDrivers(scooterTaxiClient);
    }

}

    
