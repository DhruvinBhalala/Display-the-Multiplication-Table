function genrate() {
    var num = document.getElementById("enter").value;
    var table="";
     for (var i = 1; i <= 10; i++) {

         var result = num * i ;
         table+= num + "x" + i + "=" + result + "<br>";
     } 
     document.getElementById('result').innerHTML = table;
 }