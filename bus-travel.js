// Create a factory function
function BusWidget() {
    // declare a variable and assign it to 0 to keep track of the points
    let points = 0;


    // Create a function to enter the the points
    function enterPoints(thePoints) {
        points = thePoints
    }
   
    //create a function to choose the starting location and return the points to be used
    function selectStartPoint(place) {
        if (place == "Dunoon") {
            points = points + 25
        }
        if (place == "Khayelitsha") {
            points = points + 40
        }
       
        if (place == "Mitchells Plain") {
             points = points + 30
        }
    }
    
   

    //create a function to select travel time
    function selectTravelTime(time, place) {
       if(time == "peak" && place == "Khayelitsha" ){
        points += 50 
       }
    
    }
     // create a function to be able to see the points
   
    function getPoints() {
        return points

    }
    //return all the functions created
    return {
        enterPoints,
        getPoints,
        selectStartPoint,
        selectTravelTime
    }
}