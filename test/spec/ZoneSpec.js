describe("Zone", function() {
    var zone;
    
    beforeEach(function() {
	zone = new Zone;
    });
    
    it("enums", function() {
	expect(zone.Front).toEqual("Front");
	expect(zone.Middle).toEqual("Middle");
	expect(zone.Right).toEqual("Right");
	expect(zone.Left).toEqual("Left");
	expect(zone.Rear).toEqual("Rear");
	expect(zone.Center).toEqual("Center");
    });

  describe("attributes", function() {
    beforeEach(function() {
      var driver = zone.driver;
      var modDriver = new Zone();
      modDriver.driver.value = [zone.Rear, zone.Center];
      zone.driver = modDriver;
    });
    
    it("read only attributes", function() {
      expect(zone.driver).toEqual(driver);
    });
    it("not modified attributes", function() {
      expect(driver.equals(modDriver.driver)).toEqual(false);
    });
  });
    describe("Functions", function() {
	var driver;
	var passernger;

	beforeEach(function() {
	    driver = zone.driver;
	    passenger = zone.passenger;
	});
	
	it("Equals", function() {
            expect(driver.equals(zone.driver)).toEqual(true);
            expect(driver.equals(passenger)).toEqual(false);
	});
	
	it("Contains", function() {
            expect(driver.contains(zone.driver)).toEqual(true);
            expect(driver.contains(zone.passenger)).toEqual(false);
	});
    });
    
});
