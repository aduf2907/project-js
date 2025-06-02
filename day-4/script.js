const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const counterText = document.querySelector(".counter");
const maxLength = 200;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  charCount.textContent = length;

  if (length > 170 && length < maxLength) {
    document.body.style.backgroundColor = "#f39c12";
  } else if (length === maxLength) {
    document.body.style.backgroundColor = "#e74c3c";
  } else {
    document.body.style.backgroundColor = "#26ff8f";
  }
});
