/* 
[NoInterfaceObject]
interface VehicleCommonDataType {
    readonly    attribute Zone?         zone;
    readonly    attribute DOMTimeStamp? timeStamp;
};
*/

var VehicleCommonDataType = function() {
    Object.defineProperty(this, "bow", {
        value: "bowbow",
	    writable: false
	});
}
