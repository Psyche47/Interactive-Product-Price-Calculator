function getSpecPrice(spec, extraCost) {
  const priceElement = document.getElementById(spec + "-price");
  priceElement.innerText = extraCost;
}

// Parsing Field Values to Integer
function convertInnerText(fieldValue) {
  const fieldValueText = fieldValue.innerText;
  const fieldValueAmount = parseInt(fieldValueText);
  return fieldValueAmount;
}

//Total Cost Calculation
function calculateTotalCost() {
  const totalCostField = document.getElementById("total-price");
  const footerTotalCostField = document.getElementById("footer-total-price");
  const memoryField = document.getElementById("memory-price");
  const memoryCost = convertInnerText(memoryField);
  const storageField = document.getElementById("storage-price");
  const storageCost = convertInnerText(storageField);
  const deliveryField = document.getElementById("delivery-price");
  const deliveryCost = convertInnerText(deliveryField);
  const totalCost = 1299 + memoryCost + storageCost + deliveryCost;
  totalCostField.innerText = totalCost;
  footerTotalCostField.innerText = totalCost;
}

// Calculation of promo code
function promoActivation() {
  const footerTotalCostField = document.getElementById("footer-total-price");
  const memoryField = document.getElementById("memory-price");
  const memoryCost = convertInnerText(memoryField);
  const storageField = document.getElementById("storage-price");
  const storageCost = convertInnerText(storageField);
  const deliveryField = document.getElementById("delivery-price");
  const deliveryCost = convertInnerText(deliveryField);
  const discount = (1299 + memoryCost + storageCost + deliveryCost) / 5;
  const totalCost = 1299 + memoryCost + storageCost + deliveryCost;
  newCost = totalCost - discount;
  footerTotalCostField.innerText = newCost;
}

document.getElementById("8GB-Memory").addEventListener("click", function () {
  getSpecPrice("memory", 0);
  calculateTotalCost();
});

document.getElementById("16GB-Memory").addEventListener("click", function () {
  getSpecPrice("memory", 180);
  calculateTotalCost();
});

document.getElementById("256GB-Storage").addEventListener("click", function () {
  getSpecPrice("storage", 0);
  calculateTotalCost();
});

document.getElementById("512GB-Storage").addEventListener("click", function () {
  getSpecPrice("storage", 100);
  calculateTotalCost();
});

document.getElementById("1TB-Storage").addEventListener("click", function () {
  getSpecPrice("storage", 180);
  calculateTotalCost();
});

document.getElementById("free").addEventListener("click", function () {
  getSpecPrice("delivery", 0);
  calculateTotalCost();
});

document
  .getElementById("delivery-charge")
  .addEventListener("click", function () {
    getSpecPrice("delivery", 20);
    calculateTotalCost();
  });

document.getElementById("promo-code").addEventListener("click", function () {
  const promoInputField = document.getElementById("input-promo");
  let promoInputText = promoInputField.value;
  if (promoInputText.toLowerCase() == "stevekaku") {
    promoActivation();
  }
  promoInputField.value = "";
});
