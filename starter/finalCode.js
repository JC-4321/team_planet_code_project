// JC and Haziel

const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserFactors(type, value) {
    let results = {};

    let measurementUnit;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }

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
// showUserFactors(factorType, factorPlanets,factorUnit, factorValue)
// console.log(`your ${factorType} is ${factorValue} ${factorUnit}) on ${unit} in ${factorPlanet})

function getUserInput() {
    let factorTypes = "pushups";
    let factorSystems;

    // console.log("Enter your measurement type ('jump' or 'weight' or 'pushups')");

    // what type is the user inputting?
    // const factorTypes = ['jump', 'weight', 'pushups'];
    // const type = prompt(">>")


    while (true) {
        const validWords = ['jump', 'weight', 'pushups'];
        console.log("Enter your measurement type ('jump' or 'weight' or 'pushups')");
        const type = prompt(">>")
        let isMatch = false;
        for (let i = 0; i < validWords.length; i++) {
            if (
                type.trim().toLowerCase() === validWords[i]) {
                match = true;
                break;
            }
            if (isMatch) {
                break;
            }
            else {
                console.error("try again");
            }
        }
        break;
    }

    while (true) {
        console.log("What system would you like, ('Metric' or 'Imperial')");
        const typeSystems = prompt(">>");
        if (!isNaN(typeSystems) && 4 > factorSystems > 0) {
            switch (typeSystems) {
                case "1":
                    factorSystems = "metric";
                    break;
                case "2":
                    factorySystems = "imperial";
                    break;
                default:
                    break;
            }
            break;
        } else {
            console.error("Please enter correctly");
        }

    }

    // let facorUnit = "reps"
    // if (factorSystems === "metric") {
    // if (factorTypes === "weight"){
    // 

    // while(true) {
    // if (factorTypes !== "pushups") { 
    // switch
    // }
    //
    //
    //


    // console.log("What system would you like to use? ('Metric' or 'Imperial')?");
    // const factorSystems = ['Metric', 'Imperial'];
    // const typeSystems = prompt(">>")


    // while (true) {
    //     isMatch = false;
    //     if (
    //         type.trim().toLowerCase() === factorSystems[i]) { match = true; }
    //     else {
    //         console.log("try again");
    //     }
    //     break;
    // }

    // console.log("Metirc or Imperial?");
    // const factorSystems = prompt(">>").trim().toLowerCase();

    // console.log("cm or kg? put reps if you selected ");
    // const factorMeasurements = prompt(">>").trim().toLowerCase();

    // console.log("")


    const userInput = prompt(">> ");
    // console.log("enter the value (as a number)");
    // const valueInput = prompt(">> ");
    // const valueInput = prompt(">> ");
    // console.log(`Your ${type} is:`, userInput);

    // console.log(`Your ${type} on other planets is:`);
    showUserFactors(factorTypes, factorSystems);
}
// getUserInput();
global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;
getUserInput();

