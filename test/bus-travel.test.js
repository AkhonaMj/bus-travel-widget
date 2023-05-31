describe("Bus Travel Function", function(){
    it("Should be able to enter points", function(){
        let busWidget = BusWidget();
    busWidget.enterPoints(40);
    assert.equal(40, busWidget.getPoints());

    })

    it("Should be able to choose the start location", function(){
        let busWidget = BusWidget();
    busWidget.selectStartPoint("Khayelitsha");
    assert.equal("Khayelitsha", busWidget.getStartPoint());

    })
})