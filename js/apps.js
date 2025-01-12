const buttons = document.getElementsByTagName("button");

function updateTotal() {
  //clearing promo code when changing items
  const promoCodeField = document.getElementById('input-field');
  promoCodeField.value = '';

  const discountValue = document.getElementById('discount');
  discountValue.textContent = 0;
  

  const basePrice = 1299;
  const memoryCost = parseInt(
    document.getElementById("memory-cost").textContent
  );
  const storageCost = parseInt(
    document.getElementById("storage-cost").textContent
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").textContent
  );
  return basePrice + memoryCost + storageCost + deliveryCost;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id === "8gb-memory") {
      customizationPrice("memory-cost", 0);
    } else if (buttons[i].id === "16gb-memory") {
      customizationPrice("memory-cost", 150);
    } else if (buttons[i].id === "256gb-storage") {
      customizationPrice("storage-cost", 0);
    } else if (buttons[i].id === "512gb-storage") {
      customizationPrice("storage-cost", 100);
    } else if (buttons[i].id === "1tb-storage") {
      customizationPrice("storage-cost", 200);
    } else if (buttons[i].id === "late-delivery") {
      customizationPrice("delivery-cost", 0);
    } else if (buttons[i].id === "early-delivery") {
      customizationPrice("delivery-cost", 20);
    } else {
      promocode();
    }
  });
}

function customizationPrice(id, cost) {
  const now = document.getElementById(id);
  now.textContent = cost;
  const totalCost = updateTotal();
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = totalCost;

  // Updating User Payment
  const userPayment = document.getElementById('user-payment');
  userPayment.textContent = totalCost;
}

function promocode(){
  const promoCode = document.getElementById('input-field').value;
  const userPayment = document.getElementById('user-payment');
  const currentTotalPrice = parseInt(userPayment.textContent);
  const discountValue = document.getElementById('discount');
  if(promoCode == 'ostad10'){    
    discountValue.textContent = currentTotalPrice*.10;
    const discountedPrice = currentTotalPrice - (currentTotalPrice*.10);
    userPayment.textContent = discountedPrice;
    alert("Promo code applied successfully!");
  }else if(promoCode == 'ostad5'){
    discountValue.textContent = currentTotalPrice*.05;
    const discountedPrice = currentTotalPrice - (currentTotalPrice*.05);
    userPayment.textContent = discountedPrice;
    alert("Promo code applied successfully!");
  }else{
    alert("Not a valid promo code!");
  }
}
