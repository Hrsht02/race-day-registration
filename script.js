function assignRaceDetails(runnerAge, registeredEarly) {
    let raceNumber = Math.floor(Math.random() * 1000);

    if (runnerAge > 18 && registeredEarly) {
        raceNumber += 1000;
    }

    if (runnerAge > 18 && registeredEarly) {
        console.log(`They will race at 9:30 am. Race No.: ${raceNumber}`);
    } 
    else if (runnerAge > 18 && !registeredEarly) {
        console.log(`They will race at 11:00 am. Race No.: ${raceNumber}`);
    } 
    else if (runnerAge < 18) {
        console.log(`They will race at 12:30 pm. Race No.: ${raceNumber}`);
    } 
    else {
        console.log('See the registration desk.');
    }
}

// Example test cases
assignRaceDetails(25, true);   
assignRaceDetails(16, false);  
assignRaceDetails(18, false);  
