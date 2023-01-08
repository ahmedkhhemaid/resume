let up = document.getElementById("scroll-top-button");

window.onscroll = function () {
  if (window.scrollY > 300) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
};
up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
