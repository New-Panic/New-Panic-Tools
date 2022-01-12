const button = document.querySelector(".button");
function convertToF() {
  const input = document.querySelector(".inputs").value;
  celsius = input == "" ? "0" : input;
  const fahrenheit = celsius * (9/5) + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);

  function createHtml() {
    const resultDiv = document.querySelector(".result-div");
    //Ok, tu fez commit, mas esqueceu tudo do básico né? Hierarquia de tags foi pro lixo, lembra que estilo é no css, não existe h1 letra grande h6 letra pequena. Dá um jeito nisso. ~(>_<。)＼
    const result = document.createElement("h1");
    result.classList.add("result-text");
    resultDiv.classList.add("menu-row-margin");
    resultDiv.insertBefore(result, resultDiv.firstChild);
  }

  if(document.querySelector(".result-text") == null) {
    createHtml();
  }
  document.querySelector(".result-text").innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
  document.querySelector("#celsius_input").value = "";
  }

button.addEventListener("click", convertToF);
