//This function is used to show a message when the page is loaded
function getMessage(){
    alert("Hello User! Welcome to Jello's Simple External Script Page");
    alert("This page can return the difference of your given numbers");
}

//function used to subtract the two inputs
function getSum(){   
    //gets the value of the first input
    let a = document.getElementById("a").value;

    //gets the value of the second input
    let b = document.getElementById("b").value;

    let sum = a - b;

    document.getElementById("message").innerHTML = "The difference is : " + (sum);
}

//function used to clear results
function clearResult(){
    document.getElementById("message").innerHTML = "";
}