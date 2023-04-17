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
  return Object.keys(letters)
      .reduce(
          (acc, el) => acc.replaceAll(letters[el], el),
          text.value.toLowerCase()
      )
};

text.addEventListener("keypress", (e) => {
  const charCode = e.key;
  if (/^-?\d+$/.test(charCode)) e.preventDefault();
});

text.addEventListener("input", (e) => {
  e.target.value = text.value.toLowerCase();
});

output.disabled = true;

encrypt.addEventListener("click", (e) => {
  e.preventDefault();
  output.value = encryptText(text.value);
});

decrypt.addEventListener("click", (e) => {
  e.preventDefault();
  output.value = decryptText(text.value);
});

copy.addEventListener("click", (test) => {
  test = output.innerHTML = output.value;
  // Async function
  navigator.clipboard.writeText(test)
      .then(() => {
        text.value = "";
      });
});

reset.addEventListener("click", () => {
  text.value = "";
  output.value = "";
});
