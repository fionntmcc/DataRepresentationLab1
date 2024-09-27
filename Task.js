/*
    Fionn McCarthy
    G00414386@atu.ie
*/

// instance array of strings
const stringArr = ["Fionn", "Paul", "Mark", "Joseph"];

function addTask(task) {
    // push task onto array
    stringArr.push(task);

    // print out array
    console.log(task + " added to string arr.");
    console.log("New array: " + stringArr);
}

addTask("Pauleen");