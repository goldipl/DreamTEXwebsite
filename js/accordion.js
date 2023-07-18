const accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let slot = this.nextElementSibling;
    if (slot.style.display === "block") {
      slot.style.display = "none";
    } else {
      slot.style.display = "block";
    }
  });
}