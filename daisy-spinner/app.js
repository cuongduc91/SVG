document.addEventListener('DOMContentLoaded', () => {
  function animateSvg() {
    const daisiePath = document.querySelectorAll("path");
    console.log(daisiePath);
    delay = 0;
    for (let i = 0; i < daisiePath.length; i++) {
      console.log("test " + i);
      daisiePath[i].style.animation = `fill .5s ease-in-out ${delay}s infinite`;
      delay += 0.05;
    }
  }
  animateSvg();
}, false);