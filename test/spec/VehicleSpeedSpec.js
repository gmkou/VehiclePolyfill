describe("VehicleSpeed", function(){
    var vehicle;
    var vehicleSpeed;

    beforeEach(function(done){
	vehicle = navigator.vehicle;

	vehicle.vehicleSpeed.get().then(function(vs) {
	    setTimeout(function(){
		vehicleSpeed = vs;
		done();
	    }, 10); 
	},function(error) {
	    setTimeout(function(){
		done();
	    }, 10); 
	});
    });
    
    it("vehicleSpeed.get()", function(done){
	// @todo value "100" is temporal one
	expect(vehicleSpeed.speed).toBe(100);
	done();
    });

});
