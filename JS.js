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