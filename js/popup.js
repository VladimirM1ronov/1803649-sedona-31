const findHotelButton = document.querySelector(".searching-hotel-button");
const popupHotel = document.querySelector(".modal");
const form = popupHotel.querySelector(".searching-form");
const dateArrival = popupHotel.querySelector(".modal-date-arrival");
const dateDeparture = popupHotel.querySelector(".modal-date-departure");
const adultNumber = popupHotel.querySelector(".adult-number");
const childrenNumber = popupHotel.querySelector(".children-number");


findHotelButton.addEventListener("click", function() {
	popupHotel.classList.toggle("modal-show");
	popupHotel.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if ((!dateArrival.value || !dateDeparture.value) || (!adultNumber.value && !childrenNumber.value)) {
		// console.log("False");
		popupHotel.classList.add("modal-error");
		evt.preventDefault();
	} else {
		// console.log("true");
		evt.preventDefault();
	}
});