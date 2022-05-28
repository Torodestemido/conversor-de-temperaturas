function escalac () {

  let temp = document.getElementById("temperatura")
  temp.textContent = "Celsius"

}

function escalak () {

  let temp = document.getElementById("temperatura")
  temp.textContent = "Kelvin"

}

function escalaf () {

  let temp = document.getElementById("temperatura")
  temp.textContent = "Fahrenheit"

}


function converterc () {

  let converter = document.getElementById("converter")
  converter.textContent = "Celsius"

}

function converterk () {

  let converter = document.getElementById("converter")
  converter.textContent = "Kelvin"

}

function converterf () {

  let converter = document.getElementById("converter")
  converter.textContent = "Fahrenheit"

}

function resolver () {
  

  let resultado = document.getElementById("resultado")
  let converter = document.getElementById("converter")
  let temp = document.getElementById("temperatura")
  let numero = document.getElementById("numero")
  let K = 273.15
  let zero = 0

  
 

  //Varialvel de erro se o campo da temperatura e converter estiver vazio
  if(temp.textContent == "Temperatura Em" && converter.textContent == "Converte Para" ) {
    alert("selecione a escala de temperatura e selecione alguma escala para converter  :D")
  }


  //Varialvel de erro se o campo da temperatura estiver vazio
  if(temp.textContent == "Temperatura Em" && converter.textContent == "Celsius" ) {
    alert("selecione a escala de temperatura e alguma escala Para converter  :D")
  }
  if(temp.textContent == "Temperatura Em" && converter.textContent == "Kelvin" ) {
    alert("selecione a escala de temperatura e alguma escala Para converter  :D")
  }
  if(temp.textContent == "Temperatura Em" && converter.textContent == "Fahrenheit" ) {
    alert("selecione a escala de temperatura e alguma escala Para converter  :D")
  }


  //Varialvel de erro se o campo de converter estiver vazio
  if(temp.textContent == "Celsius" && converter.textContent == "Converte Para") {
    alert("selecione alguma escala Para converter :D")
  }
  if(temp.textContent == "Kelvin" && converter.textContent == "Converte Para") {
    alert("selecione alguma escala Para converter :D")
  }
  if(temp.textContent == "Fahrenheit" && converter.textContent == "Converte Para") {
    alert("selecione alguma escala Para converter :D")
  }


  // Se o campo de numero estiver vazio informe
  if(document.getElementById("numero").value == "") {
    alert('Por favor, preencha o campo com algum numero');
    document.getElementById("numero").value = zero
   
  }


  // variaveis das escalas/temperaturas
  if(temp.textContent == "Celsius" && converter.textContent == "Celsius") {
    resultado.innerHTML = numero.value + ' C'
  } 
  if(temp.textContent == "Celsius" && converter.textContent == "Kelvin") {
    resultado.innerHTML = parseInt(numero.value) + K + ' K'  
  }
  if(temp.textContent == "Kelvin" && converter.textContent == "Celsius") {
    resultado.innerHTML = parseInt(numero.value) + K + ' K'  
  }
  if(temp.textContent == "Kelvin" && converter.textContent == "Kelvin") {
    resultado.innerHTML = parseInt(numero.value)  + ' K'
  }
  if(temp.textContent == "Celsius" && converter.textContent == "Fahrenheit") {
    resultado.innerHTML = ( parseInt(numero.value) * 9/5) + 32 + ' F'
  }
  if(temp.textContent == "Fahrenheit" && converter.textContent == "Celsius") {
    resultado.innerHTML = ( parseInt(numero.value) - 32) / 5/9 -17.78 + ' F'
  }
  if(temp.textContent == "Fahrenheit" && converter.textContent == "Fahrenheit") {
    resultado.innerHTML =  numero.value + ' F'  
  }
  if(temp.textContent == "Fahrenheit" && converter.textContent == "Kelvin") {
    resultado.innerHTML =  (numero.value - 273.15) * 9/5 + 32 +  ' F'
  }
  if(temp.textContent == "Kelvin" && converter.textContent == "Fahrenheit") {
    resultado.innerHTML = (numero.value - 273.15) * 9/5 + 32 + ' F'
  }
 

}
