const daftarproduk = [{
    nama: "Minyak Goreng",
    harga: 42000,
    stok: 46
},{
    nama: "Beras",
    harga: 15000,
    stok: 50
},{
    nama: "Gula",
    harga: 18000,
    stok: 30
}];

console.log(daftarproduk);

//if : menghitung diskon
function hitungDiskon(totalbelanja) {
let diskon = 0;
if(totalbelanja >= 10000) {
    diskon = totalbelanja * 0.1;
} else if(totalbelanja >= 50000){
    diskon = totalbelanja * 0.05;
} else {
    diskon = 0;
}
return diskon;
}
console.log(`Harga Beli 130.000, dapat diskon : ${hitungDiskon(130000)}`);

//switch : nyari tau metode pembayaran
function metodebayar(metodebayar) {
    let biaya = 0;
switch (metodebayar) {
    case "tunai":
        biaya = 500;
        break;
    case "qris":
        biaya = 2500;
        break;
    default:
        biaya = 5000;
}
return biaya;
}
console.log(`metode bayar : ${metodebayar("tunai")}, dengan metode bayar adalah tunai`);
console.log(`metode bayar : ${metodebayar("qris")}, dengan metode bayar adalah qris`);

//for..of : hitung satu total
let totalbelanja = 0;   
for (const produk of daftarproduk) {
    totalbelanja += produk.harga * produk.stok;
}
console.log(`Total belanja: ${totalbelanja}`);