const moonPath = "M50.5 88.5C50.5 137.377 87 177 87 177C38.9512 177 0 137.377 0 88.5C0 39.6228 38.9512 0 87 0C87 3 50.5 39.6228 50.5 88.5Z";

const sunPath = "M174 88.5C174 137.377 135.049 177 87 177C38.9512 177 0 137.377 0 88.5C0 39.6228 38.9512 0 87 0C135.049 0 174 39.6228 174 88.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

// We need to click on the sun

darkMode.addEventListener("click", () => {
  //using the anime.js
  // set up timeline 
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  })
  // add different animations to timeline
  timeline.add({
      targets: ".sun",
      d: [{
        value: toggle ? sunPath : moonPath
      }]
    })
    .add({
      targets: "#darkMode",
      rotate: toggle ? 0 : 320
    }, '-= 350')
    .add({
      targets: "section",
      backgroundColor: toggle ? 'rgb(199, 199, 199)' : 'rgb(22,22,22)',
      color: toggle ? 'rgb(22,22,22)' : 'rgb(199, 199, 199)'
    }, '-= 700');

  // toggle 
  toggle = !toggle

})