let db;

//create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = (event) => {
    // create object store called "pending" and set autoIncrement to true
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};