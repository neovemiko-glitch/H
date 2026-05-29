// =========================
// FILE : script.js
// =========================

// ANIMASI SAAT SCROLL
const cards = document.querySelectorAll(
'.card, .anggota, .produk, .galeri img'
);

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const posisi = card.getBoundingClientRect().top;
    const layar = window.innerHeight;

    if(posisi < layar - 100){
      card.classList.add('muncul');
    }

  });

});

// EFEK KETIK HERO
const text = "Kerajinan pot gantung dari batok kelapa dan kipas dari bambu";
let i = 0;

function ketik(){
  if(i < text.length){
    document.querySelector(".hero-text h1")
    .innerHTML += text.charAt(i);

    i++;
    setTimeout(ketik, 100);
  }
}

document.querySelector(".hero-text h1").innerHTML = "";
ketik();