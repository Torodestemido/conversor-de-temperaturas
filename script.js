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
  temp.textContent = "fahrenheit"

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
  converter.textContent = "fahrenheit"

}

function resolver () {
  let resultado = document.getElementById("resultado")
  let converter = document.getElementById("converter")
  let temp = document.getElementById("temperatura")
  let numero = document.getElementById("numero")

  if(temp.textContent === "Celsius" && converter.textContent === "Celsius") {
    console.log(numero.value)
  }
 

}
