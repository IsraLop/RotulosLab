const posters = document.querySelectorAll(".left, .right");

posters.forEach((poster) => {
  poster.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / poster.offsetWidth - 0.5) * 8;
    const y = (e.offsetY / poster.offsetHeight - 0.5) * 8;

    poster.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  poster.addEventListener("mouseleave", () => {
    poster.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
