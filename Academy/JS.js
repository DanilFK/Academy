"use strict";

var admin;
var name = "Vasiliy";
admin = name;
console.log(admin);
var planet = "Earth";
var user = "Petya";
console.log(user + " from " + planet);

function isInteger(num){
    if(num == (num^0)){
        return true;
    }
    else{return false;}
}
console.log(isInteger(5));
console.log(isInteger(1.5));