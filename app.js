var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
modal.style.opacity = 0;
backdrop.style.opacity = 0;
let duration = 0.5;

function openModal() {
  modal.style.display = "block";
  backdrop.style.display = "block";
  gsap.to(modal, duration, { opacity: 1 });
  gsap.to(backdrop, duration, { opacity: 1 });
}
function closeModal() {
  gsap.to(modal, duration, { opacity: 0 });
  gsap.to(backdrop, duration, { opacity: 0 });

  let timeOut = duration * 130;
  setTimeout(function () {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, timeOut);
}
