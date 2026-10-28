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
170
function processPayment(methodPayment) {
  switch (methodPayment) {
    case "credit card":
      console.log("Pembayaran menggunakan kartu kredit.");
      break;
    case "qris":
      console.log("Pembayaran menggunakan QRIS.");
      break;
    case "cash":
      console.log("Pembayaran menggunakan uang tunai.");
      break;
    default:
      console.log("Metode pembayaran tidak dikenal.");
  }
}

processPayment("credit card");

const product = [
  { name: "Oil Vegetable", price: 120000, stock: 2 },
  { name: "Rice", price: 70000, stock: 1 },
];
for (const x of product) {
  console.log(
    `Nama Produk: ${x.name}, Harga: Rp. ${x.price}, Stok: ${x.stock}`,
  );
}
