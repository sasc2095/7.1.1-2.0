fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector(".productInformation h1").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productInformation h3").textContent = product.variantname;
  document.querySelector(".productInformation .fullprice").textContent = product.relid;
  document.querySelector(".productInformation .newprice").textContent = product.price;
  document.querySelector(".productInformation .discountprice").textContent = product.discount;

  document.querySelector(".productInformation .brandbio").textContent = product.brandbio;
  document.querySelector(".productInformation .basecolor").textContent = product.basecolour;
  document.querySelector(".productInformation .subcategory").textContent = product.subcategory;
}
