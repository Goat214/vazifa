//1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
console.log("1-misol");
let a = 2;
let b = 5;
let hisob = 0;
for (let i = a; i <= b; i++) {
  hisob++;
  console.log(i);
}
console.log(`sonlar soni: ${hisob}`);

//2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
console.log("2-misol");
let a2 = 552;
let b2 = 555;
let hisob2 = 0;
for (let i2 = b2; i2 >= a2; i2--) {
  hisob2++;
  console.log(i2);
}
console.log(`sonlar soni: ${hisob2}`);

//3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
console.log("3-misol");

let narh = 500;
for (let index = 1; index <= 10; index++) {
  console.log(`${index}-kg  ${index * narh}-сом`);
}

//4.Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
console.log("4-misol");

let narh2 = 200;
for (let index2 = 12; index2 <= 20; index2 += 2) {
  console.log(`${index2}-kg: ${(index2 / 10) * narh2}`);
}

//5.a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
console.log("5-misol");
let a3 = 2;
let b3 = 3;
let hisob3 = 0;
for (let index = a3; index <= b3; index++) {
  hisob3 += index;
}
console.log(hisob3);

//6.a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
console.log("6-misol");
let a6 = 1;
let b6 = 3;
let hisob6 = 1;
for (let index = a6; index <= b6; index++) {
  hisob6 *= index;
}
console.log(hisob6);
//7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
console.log("5-misol");
let a7 = 1;
let b7 = 3;
let hisob7 = 1;
let yigindi = 0;
for (let index = a7; index <= b7; index++) {
  hisob7 = index ** 2;
  yigindi += hisob7;
}
console.log(yigindi);

//8.For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
console.log("8-misol");

let n = 5;
let S = 0;

for (let i = 1; i <= n; i++) {
  S += 1 / i;
}

console.log("Yig'indi: " + S);

//9.For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
console.log("9-misol");
let n1 = 5;
let s = 1;

for (let i = 1; i <= n; i++) {
  s *= 1 + i / 10;
}

console.log("Ko‘paytma: " + s);

//Har bir mahsulotning narxini 10% ga oshirib yangi massiv yaratish.
let mahsulotlar = [
  { nomi: "Telefon", narx: 500 },
  { nomi: "Noutbuk", narx: 1200 },
  { nomi: "Kofe mashinasi", narx: 150 },
];

let narxlar = mahsulotlar.map((mahsulot) => mahsulot.narx * 1.1);

console.log(narxlar);


// ----------------
let sonlar = [5, 10, 15, 20];

let natija = sonlar.map(son => {
  return {
    son: son,
    kvadrat: son * son
  };
});

console.log(natija);
//-------------------------------
let ismlar = ["ali", "vali", "hasan", "olim"];

let natija2 = ismlar.map(ism => {
  return {
    ism: ism,
    uzunlik: ism.length
  };
});

console.log(natija2);
