// Async method hence the console.log "I won't be executed" will run in parallel to the setTimeout below
setTimeout(() => {
    console.log("Five seconds are done!");
}, 5*1000);

console.log("I won't be executed after the callback!");