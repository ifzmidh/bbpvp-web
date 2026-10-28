//console.log(`2500 x 3 = ${2500 * 3}`);

const produkutama = {
    nama: "Beras",
    harga: 15000,
    stock: 30,
    tersedia: true
};
const daftarproduk = [
    //index 0
    produkutama,
    //index 1
    {
        nama: "Minyak Sawit",
        harga: 42000,
        stock: 50,
        tersedia: true,
    },
    //index 2
    {
        nama: "Telor",
        harga: 25000,
        stock: 50,
        tersedia: false,
    },
];

console.log(daftarproduk);
console.log(produkutama.nama);
console.log(daftarproduk[1].nama);

console.log(Number("2500"));
console.log(Number("abc"));