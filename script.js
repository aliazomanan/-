document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  this.reset();
});
