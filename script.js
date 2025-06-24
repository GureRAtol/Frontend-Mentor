document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "☰";
  document.querySelector(".navbar").appendChild(hamburger);

  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
