//? Selectors
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuc tablosu
const gelirinizTd = document.getElementById("geliriniz");

//? Variables
let gelirler = 0;

//? Events

//? Formun submit butonuna basildiginda
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //? reload'u engeller
  gelirler = gelirler + Number(gelirInput.value); //? string eklemeyi engelledik

  //? gelirlerin kalıcı olmasi icin localStorage a kopyaliyoruz
  localStorage.setItem("gelirler", gelirler);

  //? input değerini sifrladik
  ekleFormu.reset();
  //   console.log(gelirler);

  //? Değişiklikleri sonuc tablosuna yazan fonks.
  hesaplaVeGuncelle();
});

//! Sayfa her yuklendikten sonra calisan event
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler"));
  //   console.log(gelirler);
  hesaplaVeGuncelle();
});

//? Functions

const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};
