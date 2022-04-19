const input = document.getElementById("text-input");
const output = document.getElementById("text-output");
const encryptButton = document.getElementById("encrypt-btn");
const decryptButton = document.getElementById("decrypt-btn");
const noMsgImg = document.getElementById("no-msg-img");

encryptButton.onclick = encryptText;
decryptButton.onclick = decryptText;

function encryptText() {
  let text = input.innerText.toLowerCase();
  let textArray = text.split("");
  let result;

  if (input.innerText === "") {
    input.placeholder = "Digite um texto primeiro!";
  } else {
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] === "a") {
        textArray[i] = "ai";
      } else if (textArray[i] === "e") {
        textArray[i] = "enter";
      } else if (textArray[i] === "i") {
        textArray[i] = "imes";
      } else if (textArray[i] === "o") {
        textArray[i] = "ober";
      } else if (textArray[i] === "u") {
        textArray[i] = "ufat";
      }
    }
    result = textArray.join("");
    noMsgImg.style.display = "none";
    output.innerText = result;
    createCopyButton();
  }
}

function decryptText() {
  let text = input.innerText.toLowerCase();
  let result;

  if (input.innerText === "") {
    input.placeholder = "Digite um texto primeiro!";
  } else {
    result = text
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    noMsgImg.style.display = "none";
    output.innerText = result;
    createCopyButton();
  }
}

function createCopyButton() {
  const outputContainer = document.querySelector(".text-output-container");
  let hasCopyButton = outputContainer.contains(
    outputContainer.querySelector("button"),
  );

  if (!hasCopyButton) {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = "Copiar";
    outputContainer.appendChild(copyButton);
    copyButton.classList.add("decry-btn");
    copyButton.setAttribute("onclick", "copyToClipboard()");
  }
}
async function copyToClipboard() {
  await navigator.clipboard.writeText(output.innerText);
  alert("Texto copiado!");
}
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {
  location.reload();
});
