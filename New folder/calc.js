
let main="";
 function append(value) {
 document.getElementById("display").innerHTML+=value;

 }
 function appendEqual() {
     main=document.getElementById("display").innerHTML
     document.getElementById("display").innerHTML=eval(main)
     console.log(main);
 }
 function clearAll() {
     document.getElementById("display").innerHTML=""
 }
