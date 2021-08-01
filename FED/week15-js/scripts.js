let h1 = document.querySelector("h1");

// Array of rainbow gradient
let gradients = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 0)"
];

// Gradient index
let gradIndex = 0;

// Set gradient
let setGradient = function () {
    h1.style.color = gradients[gradIndex];
    gradIndex++;
    if (gradIndex == gradients.length) {
        gradIndex = 0;
    }
};

// Set gradient every second
document.querySelector("button#changeTitleButton").addEventListener("click", () => {
    document.body.style.background = "black";
    h1.innerHTML = "FED JS Lesson!";
    setInterval(setGradient, 1000);

})

function changeStyle(){

    // Select all p tags
    let p = document.querySelectorAll("p");
    p.forEach(e => e.className = "newStyle");
}

let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let errorPara = document.querySelector(".error");

emailInput.addEventListener("focus", (e)=>{
    errorPara.innerHTML = "Enter your email address";
});

emailInput.addEventListener("blur", (e)=>{
    if(e.target.value == ""){
        errorPara.innerHTML = "Email is empty!";
    }else{
        errorPara.innerHTML = "";
    }
})


// Focus and blur for password
passwordInput.addEventListener("focus", (e)=>{
    errorPara.innerHTML = "Enter your password!";
})

passwordInput.addEventListener("blur", (e)=>{
    if(e.target.value == ""){
        errorPara.innerHTML = "Password is empty!";
    }else{
        errorPara.innerHTML = "";
    }
})