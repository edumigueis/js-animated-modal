var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
modal.style.opacity = 0;
backdrop.style.opacity = 0;
let duration = 0.5;
let timeOut = duration * 1100;
let quote = document.getElementById("quote");
let message = document.getElementById("message");

function openModal() {
  modal.style.display = "block";
  backdrop.style.display = "block";
  gsap.fromTo(
    modal,
    duration,
    {
      opacity: 1,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      ease: Power1.easeOut,
    }
  );
  gsap.fromTo(
    backdrop,
    duration,
    {
      opacity: 1,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      ease: Power1.easeOut,
    }
  );
}

function closeModal(event) {
  if (quote.value != "" && !event.target.classList.contains("btn-cancel")) {
    message.innerHTML = quote.value;
  }

  gsap.fromTo(
    modal,
    duration,
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: 40,
      ease: Power1.easeOut,
    }
  );
  gsap.fromTo(
    backdrop,
    duration,
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: 40,
      ease: Power1.easeOut,
    }
  );

  setTimeout(function () {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }, timeOut);
}
