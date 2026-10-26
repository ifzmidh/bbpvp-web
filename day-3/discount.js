function discount(totalPrice) {
  let discount = 0;
  if (totalPrice >= 100000) {
    discount = totalPrice * 0.1;
  } else if (totalPrice >= 50000) {
    discount = totalPrice * 0.05;
  } else {
    discount = 0;
  }

  return discount;
}

console.log("Harga beli Rp. 120000, mendapatkan diskon: Rp.", discount(120000));
console.log("Harga beli Rp. 75000, mendapatkan diskon: Rp.", discount(75000));
