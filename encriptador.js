const text = document.getElementById("text");
const output = document.getElementById("output");
const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const copy = document.getElementById("copy");
const reset = document.getElementById("reset");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//Object with the letters to be replaced
const letters = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

//Function to encrypt the text

const encryptText = (text) => {
  let encrypt = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    encrypt += letters[letter] || letter;
  }
  return encrypt;
};

//Function to decrypt the text

const decryptText = () => {
  const textEncrypt = text.value
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ufat/gi, "u")
    .toLowerCase();
  return textEncrypt;
};

text.addEventListener("keypress", (e) => {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode >= 48 && charCode <= 57) {
    e.preventDefault();
  }
});

text.addEventListener("input", (e) => {
  e.target.value = text.value.toLowerCase();
});

output.disabled = true;

encrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const encryptValue = encryptText(text.value);
  output.value = encryptValue;
});

decrypt.addEventListener("click", (e) => {
  e.preventDefault();
  const decryptValue = decryptText(text.value);
  output.value = decryptValue;
});

copy.addEventListener("click", (test) => {
  test = output.innerHTML = output.value;
  navigator.clipboard.writeText(test);
  text.value = "";
});

reset.addEventListener("click", () => {
  text.value = "";
  output.value = "";
});
