

var name = prompt("Please enter your name");
if (name == null || name == "") {
    name = prompt("Please enter your name");
  } 

  
  var gender ;
  function user() {

  while((gender !== "Male" && gender !== "Female") && (gender !== "male" && gender !== "female")){
    gender = prompt("Please enter your gender , Male or Female");}
    if (gender == "Male" || gender=="male") {
      alert("Mr " + name +",\nWelcome to our family");}
    else if (gender == "Female" || gender=="female") {
      alert("Ms " + name + ",\nWelcome to our family");
  }
 

  }
 
user();
  



let drink = prompt(name +" do you want a hot or cold drink ?");

if(drink == null || drink==""){
    drink = prompt(name +" do you want a hot or cold drink ?");
} 

let drinkwant = prompt("Please write the name of the drink you want");
if ( drinkwant == null || drinkwant =="" )
{
    drinkwant = prompt("Please write the name of the drink you want");
}
 alert("The " + drinkwant+ " is being prepared");

 const file = [name ,gender,drink,drinkwant];

 for (let index = 0; index < file.length; index++) {
    console.log( file[index]);
    
 }


