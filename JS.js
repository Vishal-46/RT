//Arrow function
// this 
const Exfunc = () =>{
    return...
}
//Instead of this 
function Exfunc (){
    return...
}
// To Easy export and 
<button onClick = {Exfunc}>
</button>

//this instead of that 

<button onClick = {() => {console.log("return...")}}

//Ternary operators

let age = 19;
let name = "Vi";
if (age > 10){
    name = "Vi"
}else{
    name = "Ui"
}
//as
let age = 19;
let name = age > 10 && "Vi";
//or 
let age = 19;
let name = age > 10 || "Vi";
//as
let age = 19;
let name = age > 10 ? "Vi" : "Ui";