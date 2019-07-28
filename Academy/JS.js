"use strict";
var age = +prompt("Write your age: ", "");

if(age >= 14 && age <= 90){
    alert("Yeah, cool"); 
}
else if(age < 14 || age > 90){alert("Babies have no access");}
else{alert("either you're too old or you're too stupid and have inputed wrong age");}
