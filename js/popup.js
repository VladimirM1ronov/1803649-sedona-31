const findHotelButton = document.querySelector(".searching-hotel-button");
const popupHotel = document.querySelector(".modal");

console.log("Pososi");

findHotelButton.addEventListener("click", function() {
	popupHotel.classList.toggle("modal-show")
});