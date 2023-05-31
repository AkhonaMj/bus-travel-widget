describe("Bus Travel Function", function(){
    it("Should be able to enter points if you are", function(){
        let busWidget = BusWidget();
    busWidget.enterPoints(40);
    assert.equal(40, busWidget.getPoints());

    })

    it("Should be able to choose the start location if you are from 'khayelitsha' and return the points you will use", function(){
        let busWidget = BusWidget();
    busWidget.selectStartPoint("Khayelitsha");
    assert.equal(40, busWidget.getPoints());

    })
    it("Should be able to choose the start location if you are from 'Dunoon' and return the points you will use", function(){
        let busWidget = BusWidget();
    busWidget.selectStartPoint("Dunoon");
    assert.equal(25, busWidget.getPoints());

    })

    it("Should be able to choose the start location if you are from 'Mitchells Plain' and return the points you will use", function(){
        let busWidget = BusWidget();
    busWidget.selectStartPoint("Mitchells Plain");
    assert.equal(30, busWidget.getPoints());

    })
    it("Should be able to select peak hours or off peak hours and return the points to be used", function(){
        let busWidget = BusWidget();
    busWidget.selectTravelTime("peak", "Khayelitsha ");
    assert.equal(50, busWidget.getPoints());

    });

    it("Should be able to select peak hours or off peak hours", function(){
        let busWidget = BusWidget();
        busWidget.getPoints(100);
      
    busWidget.selectTravelTime("peak", "Khayelitsha ");
    assert.equal(2, busWidget.getPoints());

    });
});