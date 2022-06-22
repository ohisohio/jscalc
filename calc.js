let operation = window.prompt("Enter the operation you want to perform (+ - / *): ");
let FirstNumber = window.prompt("Enter the first number: ");
let SecondNumber = window.prompt("Enter the Second number: ");
let final;
if (operation == "+"){
   let final = parseInt(FirstNumber ) + parseInt(SecondNumber) 
    alert("The Sum of the numbers is " +final);
    
} else if(operation == "-"){
   let final = parseInt(FirstNumber)  - parseInt(SecondNumber) 
    alert("The difference of the numbers is " +final);


} else if(operation == "/"){
  let  final = parseInt(FirstNumber) /parseInt(SecondNumber) 
    alert("The division of the numbers is " +final);
    
} else if (operation == "*"){
   let final = parseInt(FirstNumber)  * parseInt(SecondNumber)
    alert("The mutiplication of the numbers is " +final);
} else {
    alert("NOT A VALID OPERATOR")
}

