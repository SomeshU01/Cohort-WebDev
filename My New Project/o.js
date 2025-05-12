let prompt=require("prompt-sync")()
let str  = prompt("enter the string") ;
let iispalindrom = true;
let i= 0;j=str.length-1;
while(i<j){
    if(str[i]!=str[j]){
        iispalindrom=false;
        break;

    }
    i++;
    j--
}if(iispalindrom) console.log("string is palindromic");
else console.log("given str is not palindrom");