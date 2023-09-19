function updateCount(type) {
  const currentStickersCount = document.getElementById("stickers-count");
  let count = parseInt(currentStickersCount.value);

  if (type === "increment") {
    count++;
  } else if (type === "decrement" && count > 0) {
    count--;
  }

  currentStickersCount.value = count;
}

function validateForm() {
  const reactCheckbox = document.getElementById("react-checkbox");
  const vueCheckbox = document.getElementById("vue-checkbox");
  const angularCheckbox = document.getElementById("angular-checkbox");
  const stickersQuantity = parseInt(
    document.getElementById("stickers-count").value
  );
  const typeError = document.querySelector(".error-text-sticker-type");
  const quantityError = document.querySelector(".error-text-sticker-quantity");

  typeError.classList.remove("show");
  quantityError.classList.remove("show");

  if (
    !reactCheckbox.checked &&
    !vueCheckbox.checked &&
    !angularCheckbox.checked
  ) {
    typeError.classList.add("show");
  }

  if (!stickersQuantity || stickersQuantity <= 0) {
    quantityError.classList.add("show");
  }
}

const formulario = document.getElementById("stickers-form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});
