const button = document.querySelector(".button");

function convertToFahrenheit() {
  const input = document.querySelector(".input").value;
  const celsius = input == "" ? 0 : input;
  const fahrenheit = celsius * (9/5) + 32;

  console.log((`${celsius}°C = ${fahrenheit.toFixed(2)}°F`));
  checkWriteHtml(celsius, fahrenheit, "convertToFahrenheit");
}
function wordInverter() {
    const input = document.querySelector(".input").value;
    const stringArray = input.split("");
    const invertedString = [];
    stringArray.map(character => invertedString.unshift(character));
    //return invertedString.join("");
    console.log((`${stringArray} inverts to ${invertedString.join("")}`));
    checkWriteHtml(stringArray.join(""), invertedString.join(""), "wordInverter")
}

function createHtml() {
  const resultDiv = document.querySelector(".result-div");
  const result = document.createElement("p");
  result.classList.add("result-text");
  resultDiv.classList.add("menu-row-margin");
  resultDiv.insertBefore(result, resultDiv.firstChild);
  }

function checkWriteHtml(before, result, operation) {
  if(document.querySelector(".result-text") == null) {
    createHtml();
  }
  if (operation == "convertToFahrenheit") {
    document.querySelector(".result-text").innerHTML = `${before}°C = ${result.toFixed(2)}°F`;
    document.querySelector("#input").value = "";
  } else if(operation == "wordInverter") {
    document.querySelector(".result-text").innerHTML = `"${before}" inverts to "${result}"`;
    document.querySelector("#input").value = "";  
  }
}
