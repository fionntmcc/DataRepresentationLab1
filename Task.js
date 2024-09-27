/*
    Fionn McCarthy
    G00414386@atu.ie
*/

// instance array of strings
let tasks = ["Fionn", "Paul", "Mark", "Joseph"];

let addTask = (task) => {

    // push task onto array
    console.log("Size: " + tasks.push(task));

    // confirmation
    console.log(task + " added to string tasks.");
}

let listAllTasks = () => {
    // print out array
    console.log("New array: " + tasks + "\n");
}

let deleteTask = (task) => {
    // if task is not in array
    if (tasks.indexOf(task) == -1) {
        console.log("Task " + task + " not in list!");
    }
    // task is in array
    else {
        // delete task at task index
        tasks.splice(tasks.indexOf(task), 1);
        console.log(task + " removed from list");
    }

    // print array size
    console.log("Array size: " + tasks.length + "\n");
}

// invoke functions
addTask("Pauleen");
listAllTasks();
deleteTask("Fionn");
listAllTasks();
deleteTask("Jimmy");