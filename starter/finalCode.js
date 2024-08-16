const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserFactors(type, value) {
    let results = {};

    let measurementUnit;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }

    // console.log("Your weight on this planet is ")
    // const input = prompt(">> ");
    switch (type) {
        case "jump":
            measurementUnit = "cm";
            break;
        case "weight":
            meausurementUnit = "kg";
            break;
        default:
            measurementUnit = "units";
    }

    console.log(type);
    // console.log("Your weight on other planets is:");
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurementUnit}`)
    }

}

function getUserInput() {
    console.log("Enter your measurement type ('jump' or 'weight' or 'pushups')");
    const factorTypes = ['jump', 'weight', 'pushups'];
    const type = prompt(">>")


    for (let i = 0; i < factorTypes.length - 1; i++) {
        while (true) {
            isMatch = false;
            if (
                type.trim().toLowerCase() === factorTypes[i]) { match = true; }
            else {
                console.log("try again");
            }
            break;
        }
    }

    // console.log("Metirc or Imperial?");
    // const factorSystems = prompt(">>").trim().toLowerCase();

    // console.log("cm or kg? put reps if you selected ");
    // const factorMeasurements = prompt(">>").trim().toLowerCase();

    // console.log("")


    const userInput = prompt(">> ");
    console.log("enter the value (as a number)");
    const valueInput = prompt(">> ")
    // const valueInput = prompt(">> ");
    // console.log(`Your ${type} is:`, userInput);

    // console.log(`Your ${type} on other planets is:`);
    showUserFactors(userInput, valueInput);
}
getUserInput();
global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput

