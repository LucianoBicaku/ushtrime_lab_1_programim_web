let items = document.querySelectorAll(".item__qty");
let itemTotals = document.querySelectorAll(".total");
let totalPrice = document.getElementById("totalPrice");

for (let index = 0; index < itemTotals.length; index++) {
  items[index].children[0].addEventListener("click", () => {
    if (items[index].children[1].value == 1) {
      items[index].children[1].value = 1;
    } else {
      items[index].children[1].value -= 1;

      itemTotals[index].innerHTML =
        "$ " + parseFloat(items[index].children[1].value) * 30.0 + ".00";

      totalPrice.innerHTML =
        parseFloat(itemTotals[0].innerHTML.slice(2)) +
        parseFloat(itemTotals[1].innerHTML.slice(2));
    }
  });

  items[index].children[2].addEventListener("click", () => {
    items[index].children[1].value =
      parseFloat(items[index].children[1].value) + 1;

    itemTotals[index].innerHTML =
      "$ " + parseFloat(items[index].children[1].value) * 30.0 + ".00";

    totalPrice.innerHTML =
      parseFloat(itemTotals[0].innerHTML.slice(2)) +
      parseFloat(itemTotals[1].innerHTML.slice(2));
  });
}
