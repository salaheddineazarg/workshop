function calcul () {

    var fir = document.getElementById("first").value;
    var sec = document .getElementById("seconde").value;
    var sign = document .getElementById("operation").value;
    var result;

if(sign ==='+'){
    result = parseInt(fir) + parseInt(sec);
}else if (sign==="-") {
    result =  parseInt(fir) - parseInt(sec);

}else if(sign==="*"){
    result =  parseInt(fir)  * parseInt(sec);

}else if (sign==="/"){
  if(sec!=0){
    result =  parseInt(fir) / parseInt(sec);
}  
  else {
    alert("impossible");
  }

}
document.getElementById("result").value = result;

} 