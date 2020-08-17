//init start
var modal = document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var span = document.getElementsByClassName("tclose")[0];
span.onclick = function() {
  modal.style.display = "none";
}
//init end

function clearHint()
{
	d3.select("#hintBox").text("Some Hint may show here.");
}

function showModal()
{
	modal.style.display = "block";
}

function closeModal()
{
	modal.style.display = "none";
}