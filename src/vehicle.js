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
var Zone = (
  function() {
    const Front = "Front";
    const Middle = "Middle";
    const Right = "Right";
    const Left = "Left";
    const Rear = "Rear";
    const Center = "Center";
    value = "";
    
    return {
      get driver() {
        retval = new Zone;
        retval.value = [this.Front,this.Right] ;
        return retval; 
      },
      get passenger() {
        retval = new Zone;
        retval.value = [this.Front,this.Left] ;
        return retval; 
      },
      
      equals : function(zone) {
                 return (JSON.stringify(this.value.sort()) === JSON.stringify(zone.value.sort()));
               },
      contains : function(zone) {
                   for (var i=0; i<zone.value.length; i++) {
                     if (this.value.indexOf(zone.value[i]) < 0) {
	               return false;
                     }
                   };
                   return true;
                 }
    }
})();

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
var VehicleInterface = (
  function() {
    return {
      get zones() {
        /* @todo: implement */
      }, 
      get : function () {
        return new Promise( function (resolve, reject) {
	                      resolve(VehicleSpeedInterface);
	                    })
      },
      subscribe : function ( callback, zone ) {
	// @todo : need to implement zone for vehicleSpeedInterface
        // Really? can't have different speed by zone.
	this._callback = callback;
	if (this._callback != undefined) {
	  return 1;
	} else {
	  return 0;
	}
      },
      unsubscribe : function ( handle ) {
	this._callback = undefined;
	return 0;
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
var VehicleCommonDataType =  (
  function() {
    this.zone = null;
    this.timestamp = null;

    return {
      timeStamp : function () {
                         Math.round(new Date().getTime() / 1000)
                       },
    }
})();

/* --------------------------------------- */
function augment( receivingClass, givingClass) {
  for (var methodName in givingClass) {
    if (!Object.hasOwnProperty( receivingClass, methodName ) ) {
      receivingClass[methodName] = givingClass[methodName];
    }
  }
}

/* --------------------------------------- */
/* VehicleSpeed Interface 
[NoInterfaceObject]
interface VehicleSpeed : VehicleCommonDataType {
    readonly    attribute unsigned short speed;
};

*/

var VehicleSpeedInterface = (
  function () {
    var privateSpeed = 100;
    return {
      get speed() {
        return privateSpeed;
      },
      set speed(sp) {
        /* do nothing */
      }
    }
})();
VehicleSpeedInterface.prototype = Object.create(VehicleCommonDataType);
augment(VehicleSpeedInterface, VehicleInterface);

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


/** set to navigator */
navigator.vehicle = (
  function () {
    return {
      vehicleSpeed : VehicleSpeedInterface,
    }
  })();

