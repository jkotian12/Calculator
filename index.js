//Initialize arrays
let ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "eqs", "sub", "add", "div", "mul"];
let args = [];

//Define operation functions

let add = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(typeof (arguments[i]));
        sum = sum + arguments[i];
    }
    return sum;
}
let subtract = function () {
    let init = arguments[0];
    for (let m = 1; m < arguments.length; m++) {
        init = init - arguments[m];
    }
    return init;
}
let multiply = function () {
    let product = 1;
    for (let j = 0; j < arguments.length; j++) {
        product = product * arguments[j];
    }
    return product;
}
let divide = function () {
    let quotient = arguments[0];
    for (let f = 1; f < arguments.length; f++) {
        quotient = quotient / arguments[f];
    }
    return quotient;
}
document.getElementById("answer").style.gridArea = '1/1/1/5';
document.getElementById("display").style.backgroundColor="rgb(94, 126, 76)";
document.getElementById("answer").style.backgroundColor = 'rgb(97, 92, 92)';
document.getElementById("display").style.height= "80px"
document.getElementById("display").style.width= "350px"
document.getElementById("display").style.marginLeft= "25px"
document.getElementById("display").style.marginTop= "10px"
document.getElementById("display").innerHTML = "0";

//Function for calling operations on large strings of numbers

let calculate = function () {
    for (let j = 0; j < 15; j++) {
        document.getElementById(ids[j]).addEventListener("click", () => {
            let final = 0;

            args.push(document.getElementById(ids[j]));
            for (let k = 0; k < args.length; k = k + 1) {
                if (args[k].id == "add"&&k===1) {
                    final = final + (parseInt(document.getElementById(args[k - 1].id).innerHTML)+parseInt(document.getElementById(args[k + 1].id).innerHTML));
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "add") {
                    final = final+parseInt(document.getElementById(args[k + 1].id).innerHTML);
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "sub"&&k===1) {
                    final = parseInt(document.getElementById(args[k - 1].id).innerHTML);
                    final = final -parseInt(document.getElementById(args[k + 1].id).innerHTML);
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "sub") {
                    final = final -parseInt(document.getElementById(args[k + 1].id).innerHTML);
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "div"&&k===1) {
                    final = final/(parseInt(document.getElementById(args[k - 1].id).innerHTML)/parseInt(document.getElementById(args[k + 1].id).innerHTML));
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "div") {
                    final = final/parseInt(document.getElementById(args[k + 1].id).innerHTML);
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "mul"&&k===1) {
                    final = final*(parseInt(document.getElementById(args[k - 1].id).innerHTML)*parseInt(document.getElementById(args[k + 1].id).innerHTML));
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "mul") {
                    final = final*parseInt(document.getElementById(args[k + 1].id).innerHTML);
                    document.getElementById("display").innerHTML = final;
                }
                else if (args[k].id == "eqs") {
                    document.getElementById("display").innerHTML = final;
                }
                // switch (args[k].id) {
                //     case "add":
                //         // code block
                //         final = final + (parseInt(document.getElementById(args[k - 1].id).innerHTML) + parseInt(document.getElementById(args[k + 1].id).innerHTML));
                //         console.log(final);
                //         break;
                //     case "sub":
                //         // code block
                //         final = final - (parseInt(document.getElementById(args[k - 1].id).innerHTML) - parseInt(document.getElementById(args[k + 1].id).innerHTML));
                //         console.log(final);
                //         break;
                //     case "mul":
                //         // code block
                //         final = final * (parseInt(document.getElementById(args[k - 1].id).innerHTML) * parseInt(document.getElementById(args[k + 1].id).innerHTML));
                //         console.log(final);
                //         break;
                //     case "div":
                //         // code block
                //         final = final / (parseInt(document.getElementById(args[k - 1].id).innerHTML) / parseInt(document.getElementById(args[k + 1].id).innerHTML));
                //         console.log(final);
                //         break;
                //     default:
                //         // code block
                //         console.log("def");
                }
            }
        )}

    }



calculate();
