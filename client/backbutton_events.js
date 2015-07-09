if (Meteor.isCordova) {
  var onBackButtonPressed = function(event) {
    console.log("on back-button pressed");
    // for (var key in event) {
    //   console.log(key+": "+event[key]);
    // }
    if (IonActionSheet.isShown) {
      IonActionSheet.isShown = false;
      IonActionSheet.close();
      return;
    }
    var curRouter = Router.current();
    var curRouterName = curRouter.route.getName();
    console.log("curRouterName is: "+curRouterName);
    if (curRouterName==="index") {
      IonPopup.confirm({
        title: 'Exit hint?',
        template: 'Are you sure to exit app!?',
        onOk: function() {
          console.log('Exit app!');
          navigator.app && navigator.app.exitApp && navigator.app.exitApp();
        },
        onCancel: function() {}
      });
    } else {
      Router.go("index");
    }
  };
  document.addEventListener("backbutton", onBackButtonPressed, false);
}