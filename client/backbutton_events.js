if (Meteor.isCordova) {
  var onBackButtonPressed = function(event) {
    console.log("on back-button pressed");
    for (var key in event) {
      console.log(key+": "+event[key]);
    }
    if (IonActionSheet.isShown) {
      IonActionSheet.isShown = false;
      IonActionSheet.close();
      return;
    }
  };
  document.addEventListener("backbutton", onBackButtonPressed, false);
}