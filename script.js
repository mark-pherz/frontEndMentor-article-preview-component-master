const card = document.getElementById("card");
const shareIcon = card.querySelector(
  ".card-section.contacts .share-icon-wrapper"
);
const popUp = card.querySelector(".pop-up");

shareIcon.addEventListener("click", function () {
  if (popUp.classList.contains("visible")) {
    popUp.classList.remove("visible");
  } else {
    popUp.classList.add("visible");
  }
});

document.addEventListener("click", function (event) {
  if (!popUp.contains(event.target) && !shareIcon.contains(event.target)) {
    popUp.classList.remove("visible");
  }
});
