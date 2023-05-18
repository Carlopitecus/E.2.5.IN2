function texto() {
    var x = document.getElementById("ingreso").value;
    
        
    x = x.replace(/\d+/g, '')
    let largo = x.length
    console.log(largo)

if (largo == 1) {
  

  document.getElementById("salida").innerHTML = x.toUpperCase();
} else {
  console.log("12")
  let element=""
    
  for (let index = 1; index <= largo - 2; index++) {
    
     element = element +  x[index];
  }
  if (x != "") {
    console.log(typeof x)
  console.log("x e sigual a    " + x)
  palabaCompleta= x[0].toUpperCase() + element +x[largo-1].toUpperCase()

  document.getElementById("salida").innerHTML = palabaCompleta.replace(/\d+/g, '')
  }
  ;
}
  

}