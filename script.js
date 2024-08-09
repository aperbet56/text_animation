// Récupération des éléments
const textWrapper = document.getElementsByClassName("text__animation")[0];

// remplacement de chaque caractère par <span class="letter">{char} </span>
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  '<span class="letter">$&</span>'
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".text__animation .letter",
    scale: [3, 1],
    opacity: [0, 1],
    translateZ: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: (el, i) => i * 70,
  })
  .add({
    targets: ".text__animation",
    opacity: 0,
    duration: 1000,
    delay: 1000,
    easing: "easeOutExpo",
  });

/**
 * Documentation de la librairie anime.js : https://github.com/juliangarnier/anime
 */
