pics = document.querySelectorAll(".oriShow");
pics.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.parentNode.style.backgroundImage = "url('')";
    item.style.opacity = 1.0;
  });
});
