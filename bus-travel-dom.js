//reference dom elements
const point = document.querySelector(".points");
const location = document.querySelector("#places");
const radioBtn = document.querySelector(
    "input[name='radio']:checked"
  );
const returnCheck = document.querySelector(".checkReturn");
const calculateBtn = document.querySelector(".button");
const singleTripBox = document.querySelector(".single-trip");
const singleTripPrice = document.querySelector(".single-trip-price");
const returnTrip = document.querySelector(".return-trip");
const returnTripPrice = document.querySelector("return-trip-price");


// create an instance of the factory function
const busWidget = BusWidget();


function selectLocation(){
    busWidget.enterPoints()
    busWidget.selectStartPoint(place.value);
    


}



