let btnkutu = document.getElementsByClassName("quantity-controller");

let par = document.getElementById("product-quantity");

let products = document.querySelector(".products");

const taxRate = 0.18;

const shippingPrice = 19.0;

const calculate = (a) => {
  let parİnner = a.querySelector("#product-quantity").innerText;

  let price = a.querySelector("strong").innerText;

  let sonuc = a.querySelector(".product-line-price");

  sonuc.innerText = (parİnner * price).toFixed(2);
  calculateTotal();
};

const calculateTotal = () => {
  let sonuc = document.querySelectorAll(".product-line-price");
  let subtotal = 0;
  sonuc.forEach((x) => {
    subtotal += parseFloat(x.innerText);
  });

  let tax = taxRate * subtotal;
  let shipping = subtotal ? shippingPrice : 0;
  let total = tax + subtotal + shipping;

  document.querySelector("#p2").innerText = subtotal.toFixed(2);
  document.querySelector("#p4").innerText = tax.toFixed(2);
  document.querySelector("#p6").innerText = shipping.toFixed(2);
  document.querySelector("#p8").innerText = total.toFixed(2);
};

products.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("minus") &&
    e.target.nextElementSibling.innerText > 1
  ) {
    e.target.nextElementSibling.innerText--;
    calculate(e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    calculate(e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("remove-product")) {
    if (confirm("Sepetten silinsin mi !")) {
      e.target.parentElement.parentElement.parentElement.remove();
      calculateTotal();
      cart();
    }
  } else if (
    e.target.nextElementSibling.innerText <= 1 &&
    confirm("Sepetten silinsin mi !")
  ) {
    e.target.parentElement.parentElement.parentElement.remove();
    calculateTotal();
    cart();
  }
});

const cart = () => {
  if (!document.querySelector(".product")) {
    const cont = document.getElementById("product-painel");

    cont.innerHTML = ` <div class="d-flex justfy-content-center 
                            align-item-center "><h2>Your Cart İs Empty</h2> <br>
            <a href="index.html"><button type="button" class=" mx-3 my-3 btn btn-warning">Alışverişe devam et!</button></a></div>
`;
  }
};
