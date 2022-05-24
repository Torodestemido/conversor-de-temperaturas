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
  let F = 32
 
  if(temp.textContent === "Celsius" && converter.textContent === "Celsius") {
    resultado.innerHTML = numero.value
  } 

  if(temp.textContent === "Celsius" && converter.textContent === "Kelvin") {
    resultado.innerHTML = parseInt(numero.value) + K + 'K'  
  }

  if(temp.textContent === "Kelvin" && converter.textContent === "Celsius") {
    resultado.innerHTML = parseInt(numero.value) + K + 'K'  
  }

  if(temp.textContent === "Kelvin" && converter.textContent === "Kelvin") {
    resultado.innerHTML = 273.15  
  }

  if(temp.textContent === "Celsius" && converter.textContent === "Fahrenheit") {
    resultado.innerHTML = ( parseInt(numero.value) * 9/5) + 32 + 'F'
  }

  if(temp.textContent === "Fahrenheit" && converter.textContent === "Celsius") {
    resultado.innerHTML = ( parseInt(numero.value) * 9/5) + 32 + 'F'
  }
  
  if(temp.textContent === "Fahrenheit" && converter.textContent === "Fahrenheit") {
    resultado.innerHTML =  32 + 'F'  
  }
  
  if(temp.textContent === "Fahrenheit" && converter.textContent === "Kelvin") {
    resultado.innerHTML =  (numero.value - 32) * 5/9 + K
  }

  if(temp.textContent === "Kelvin" && converter.textContent === "Fahrenheit") {
    resultado.innerHTML =  (numero.value - 32) * 5/9 + K
  }
 

}
