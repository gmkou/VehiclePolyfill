/*
Copyright (c) 2014, Kosuke Nagano
All rights reserved.
*/

/** Navigator Interface
partial interface Navigator {
    readonly    attribute Vehicle vehicle;
};
*/

var Navigator = function() {
   Object.defineProperty(this, "vehicle", {
        writable : false,
    });
};

/** Zone Interface
[NoInterfaceObject]
interface Zone {
    const DOMString Front = "Front";
    const DOMString Middle = "Middle";
    const DOMString Right = "Right";
    const DOMString Left = "Left";
    const DOMString Rear = "Rear";
    const DOMString Center = "Center";
                attribute DOMString[] value;
    readonly    attribute Zone        driver;
    readonly    attribute Zone        passenger;
    boolean equals (Zone zone);
    boolean contains (Zone zone);
};
*/
var Zone = function() {
    z = new Object();
    z.Front = "Front";
    z.Middle = "Middle";
    z.Right = "Right";
    z.Left = "Left";
    z.Rear = "Rear";
    z.Center = "Center";
    z.value = "";
    z.__defineGetter__("driver", function() { 
	retval = new Zone;
	retval.value = [this.Front,this.Right] ;
	return retval; 
    });
    z.__defineGetter__("passenger", function() { 
	retval = new Zone;
	retval.value = [this.Front,this.Left] ;
	return retval; 
    });
    z.equals = new function(zone) {
	//  @todo implement here
	return true;
    }
    z.contains = new function(zone) {
	//  @todo implement here
	return true;
    }
    return z;
}

/** VehicleInterface Interface
[NoInterfaceObject]
interface VehicleInterface {
    Promise        get (optional Zone zone);
    Promise        set (object value, optional Zone zone);
    unsigned short subscribe (VehicleInterfaceCallback callback, optional Zone zone);
    void           unsubscribe (unsigned short handle);
    readonly    attribute Zone[] zones;
};
*/
var VehicleInterface = function() {
    Object.defineProperty(this, "zones", {
        writable : false,
    });
    this._ = {};
}
VehicleInterface.prototype = {
    get : function(zone) {
	return new Promise(
	    function(resolve, reject){
		/* @todo implement here */
	    });
    }, 
    set : function(value, zone) {
	return new Promise(
	    function(resolve, reject){
		/* @todo implement here */
	    });
    }
}
VehicleInterface.prototype = (function () {
    var _callback = null;
    
    return {
	subscribe : function(callback, zone) {
	    _callback = callback;
	    /* @todo implement here */
	    return 0;
	}, 
	unsubscribe : function(handle) {
	    _callback = null;
	    /* @todo implement here */	
	}
    }
})();

/** VehicleCommonDataType Interface
[NoInterfaceObject]
interface VehicleCommonDataType {
    readonly    attribute Zone?         zone;
    readonly    attribute DOMTimeStamp? timeStamp;
};
*/
var VehicleCommonDataType =  function() {
    this.zone = null;
    this.timestamp = null;
}

/* --------------------------------------- */
/* VehicleSpeed Interface 
[NoInterfaceObject]
interface VehicleSpeed : VehicleCommonDataType {
    readonly    attribute unsigned short speed;
};
*/
var VehicleSpeedInterface = function () {
    vs = new VehicleCommonDataType();
    vs.speed = 100;
    vs.get = function () {
	return new Promise( function (resolve, reject) {
	    resolve(vs);
	});
    }
    return vs;
}

/** Vehicle Interface
[NoInterfaceObject]
interface Vehicle {
    readonly    attribute VehicleInterface vehicleSpeed;
    readonly    attribute VehicleInterface engineSpeed;
    readonly    attribute VehicleInterface powerTrainTorque;
    readonly    attribute VehicleInterface acceleratorPedalPosition;
    readonly    attribute VehicleInterface throttlePosition;
    readonly    attribute VehicleInterface tripMeter;
    readonly    attribute VehicleInterface diagnostic;
    readonly    attribute VehicleInterface transmission;
    readonly    attribute VehicleInterface cruiseControlStatus;
    readonly    attribute VehicleInterface lightStatus;
    readonly    attribute VehicleInterface interiorLightStatus;
    readonly    attribute VehicleInterface chime;
    readonly    attribute VehicleInterface fuel;
    readonly    attribute VehicleInterface engineOil;
    readonly    attribute VehicleInterface acceleration;
    readonly    attribute VehicleInterface engineCoolant;
    readonly    attribute VehicleInterface deadReckoning;
};
*/
var Vehicle = new Object();
Vehicle.vehicleSpeed = new VehicleSpeedInterface();


/** set to navigator */
navigator.vehicle = Vehicle;
