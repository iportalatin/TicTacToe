/*function square(tag) {
	this.id = document.getElementById(tag);
	this.
	this.state = "blank";
}

var squares = [];
for (i = 0; i < 3; i++) {
	for (j = 0; j < 3; j++) {
		squares[i,j] = new square("grid" + i.toString() + j.toString());
	}
}*/

function gridClick(element) {
	console.log("Clicked grid");
	element.src = "images/blank.png";
}

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
	pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

function onChangePhoto(player) {
	console.log("Inside onChangePhoto");
	// Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
}

// Called if something bad happens.
//
function onFail(message) {
	alert('Failed because: ' + message);
}

function onPhotoDataSuccess(imageData) {
      // TO DO
}