function convertToF() {
    const celsius = document.querySelector(".inputs").value
    let fahrenheit = celsius * (9/5) + 32;
    console.log(fahrenheit)
  }

const button = document.querySelector(".button")
button.addEventListener("click", convertToF);