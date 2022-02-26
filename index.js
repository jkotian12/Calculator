let add = function(){
  let sum = 0;
  for(i=0;i<arguments.length;i++){
      sum = sum + arguments[i];}
      return sum;
}
let subtract = function(){
    let init = arguments[0];
    for(i=1;i<arguments.length;i++){
        init = init - arguments[i];
    }
    return init;
}
let multiply = function(){
    let product = 1;
    for(i=0;i<arguments.length;i++){
        product = product*arguments[i];
    }
    return product;
}
let divide = function(){
    let quotient = arguments[0];
    for(i=1;i<arguments.length;i++){
        quotient = quotient/arguments[i];
    }
    return quotient;
}
// let operator = function(a,b,c){
//     if(b =`${+}`){
//         console.log(add(a,c));
//     }
//     if(b ="-"){
//         console.log(subtract(a,c));
//     }
//     if(b ="/"){
//         console.log(multiply(a,c));
//     }
//     if(b ="*"){
//         console.log(divide(a,c));
//     }
// }
// console.log(operator(8+2));