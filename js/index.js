let orderList = [];

createYourHero = () => {
  let heroTotal = 0;

  let SubName = document.getElementById("SubName").value;
  let size = document.getElementById("size").value;

  if (size === "Normal") {
    heroTotal = heroTotal + 5;
  } else if (size === "Footlong") {
    heroTotal = heroTotal + 15;
  } else if (size === "Shhlong") {
    heroTotal = heroTotal + 20;
  }

  let breadOption = document.getElementsByName("baseRadio");
  let breadValue;
  for (let i = 0; i < breadOption.length; i++) {
    if (breadOption[i].checked) {
      breadValue = breadOption[i].value;
      heroTotal = heroTotal + +breadOption[i].dataset.cost;
    }
  }

  let sauceOptions = document.getElementsByName("sauceRadio");
  let sauceArray = [];
  for (let i = 0; i < sauceOptions.length; i++) {
    if (sauceOptions[i].checked) {
      sauceArray.push(sauceOptions[i].value);
      heroTotal = heroTotal + +sauceOptions[i].dataset.cost;
    }
  }

  let toastOptions = document.getElementsByName("toastRadio");
  let toastArray = [];
  for (let i = 0; i < toastOptions.length; i++) {
    if (toastOptions[i].checked) {
      toastArray.push(toastOptions[i].value);
      heroTotal = heroTotal + +toastOptions[i].dataset.cost;
    }
  }

  let toppingOptions = document.getElementsByName("sub-toppings");
  let subArray = [];
  for (let i = 0; i < toppingOptions.length; i++) {
    if (toppingOptions[i].checked) {
      subArray.push(toppingOptions[i].value);
      heroTotal = heroTotal + +toppingOptions[i].dataset.cost;
    }
  }

  orderList.push({
    subName: SubName,
    subSize: size,
    subBread: breadValue,
    subToast: toastArray,
    subToppings: subArray,
    subSauce: sauceArray,
    subPrice: heroTotal,
  });

  console.log(orderList);

  document.getElementById("subForm").reset();
};

totalSubCost = () => {
  let realAmount = 0;

  let size = document.getElementById("size").value;

  if (size === "Normal") {
    realAmount = realAmount + 5;
  } else if (size === "Footlong") {
    realAmount = realAmount + 15;
  } else if (size === "Shhlong") {
    realAmount = realAmount + 20;
  }

  let breadOption = document.getElementsByName("baseRadio");
  for (let i = 0; i < breadOption.length; i++) {
    if (breadOption[i].checked) {
      realAmount = realAmount + +breadOption[i].dataset.cost;
    }
  }

  let sauceOptions = document.getElementsByName("sauceRadio");
  for (let i = 0; i < sauceOptions.length; i++) {
    if (sauceOptions[i].checked) {
      realAmount = realAmount + +sauceOptions[i].dataset.cost;
    }
  }

  let toastOptions = document.getElementsByName("toastRadio");
  for (let i = 0; i < toastOptions.length; i++) {
    if (toastOptions[i].checked) {
      realAmount = realAmount + +toastOptions[i].dataset.cost;
    }
  }

  let toppingOptions = document.getElementsByName("sub-toppings");
  for (let i = 0; i < toppingOptions.length; i++) {
    if (toppingOptions[i].checked) {
      realAmount = realAmount + +toppingOptions[i].dataset.cost;
    }
  }

  document.getElementById("totalSubCost").innerHTML = "R" + realAmount + ".00";
};

order = () => {
  let orders = document.getElementById("sub-orders");
  let end = document.getElementById("orderPrice");

  let grandTotal = 0;

  orders.innerHTML = "";

  for (let i = 0; i < orderList.length; i++) {
    let name = orderList[i].subName;
    let Size = orderList[i].subSize;
    let bread = orderList[i].subBread;
    let toast = orderList[i].subToast;
    let toppings = orderList[i].subToppings;
    let sauce = orderList[i].subSauce;
    let price = orderList[i].subPrice;

    grandTotal += price;

    orders.innerHTML += `
      <div class="receipt">
        <div class="receipt-look">
          <h4 class="receipt-heading">${name}</h4>
          <p class="receipt-text">Hero size: ${Size}</p>
          <p class="receipt-text">Hero Armour: ${bread}</p>
          <p class="receipt-text">Are you Toast?: ${toast}</p>
          <p class="receipt-text">Hero Sauce: ${sauce}</p>
          <p class="receipt-text">Hero Topps: ${toppings}</p>
          <p class="receipt-text">The Hero Total: ${price}</p>
        </div>
      </div>`;
  }

  end.innerHTML = "R" + grandTotal + ".00";
};


