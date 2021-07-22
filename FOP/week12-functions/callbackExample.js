function meToCounter(item, callback){
    console.log("Okay, i got that that you want " + item + ". I'll tell the chef!");

    // Step 1. To tell the chef what to cook (callback)
    callback(item);
}

function counterToChef(item){
    // Step 2. The counter tell the chef what to cook
    console.log("Chef! He wants " + item);
}

// I WANT CHICKEN RICE!
meToCounter("Chicken Rice", counterToChef);

// meToCounter is where you talk to the counter to tell what you want

// callback is when the counter person need to tell the chef what to cook