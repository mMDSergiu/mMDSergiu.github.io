// Get the dropdown button and content
var dropdownBtn = document.getElementById("dropdown-btn");
var dropdownContent = document.getElementById("dropdown-content");

// Toggle the dropdown content when the button is clicked
dropdownBtn.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown content if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropdown-btn *")) {
    dropdownContent.classList.remove("show");
  }
});
