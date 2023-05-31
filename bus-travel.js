// Create a factory function
function BusWidget() {
    // declare a variable and assign it to 0 to keep track of the points
    var points = 0;
    

    // Create a function to enter the the points
    function enterPoints(thePoints) {
        points = thePoints
    }
    // create a function to be able to see the points
    function getPoints() {
        return points

    }
    function selectStartPoint(location) {
        location = "Khayelitsha"    
        return 
    }
        function getStartPoint() {
        
        }


    
    function selectTravelTime() {

    }
    //return all the functions created
    return {
        enterPoints,
        getPoints,
        selectStartPoint,
        getStartPoint,
        selectTravelTime
    }
}