/*!
 * app.js (https://github.com/edumigueis/js-animated-modal)
 * Version: 1.0
 * Author: Eduardo Migueis @edumigueis
 * Github:https://github.com/edumigueis/js-animated-modal
 * app.js Copyright Eduardo Migueis 2020.
 */
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
modal.style.opacity = 0;
backdrop.style.opacity = 0;
let duration = 0.5;
let timeOut = duration * 1100;
let quote = document.getElementById("quote");
let message = document.getElementById("message");
const imgModal = document.querySelector(".img-modal");
imgModal.style.opacity = 0;

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
  if(imgModal.classList.contains("open")){
    closeImgModal();
    return;
  }
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

function openImgModal(event){
  imgModal.style.display = "block";
  imgModal.classList.add("open");
  document.getElementById("modal-img").setAttribute("src", event.target.src)
  gsap.fromTo(
    imgModal,
    duration,
    {
      opacity: 0,
      y: 0,
    },
    {
      opacity: 1,
      y: 40,
      ease: Power1.easeOut,
    }
  );
  gsap.fromTo(
    backdrop,
    0,
    {
      zIndex: 10
    },
    {
      zIndex: 25,
      ease: Power1.easeOut,
    }
  );
}

function closeImgModal(){
  imgModal.classList.add("open");
  document.getElementById("modal-img").setAttribute("src", event.target.src)
  gsap.fromTo(
    imgModal,
    duration,
    {
      opacity: 1,
      y: 40,
    },
    {
      opacity: 0,
      y: 0,
      ease: Power1.easeOut,
    }
  );
  gsap.fromTo(
    backdrop,
    0,
    {
      zIndex: 25
    },
    {
      zIndex: 10,
      ease: Power1.easeOut,
    }
  );

  setTimeout(function(){
    imgModal.style.display = "block";
  }, timeOut)

  imgModal.classList.remove("open");
}