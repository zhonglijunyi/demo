
IonActionSheet.isShown = false;
var toggleIonActionSheet = function() {
  if (IonActionSheet.isShown) {
    IonActionSheet.isShown = false;
    IonActionSheet.close();
    return;
  }
  IonActionSheet.isShown = true;
  IonActionSheet.show({
    titleText: 'ActionSheet Example',
    buttons: [
      { text: 'Share <i class="icon ion-share"></i>' },
      { text: 'Move <i class="icon ion-arrow-move"></i>' },
      { text: 'Exit <i class="icon ion-android-exit"></i>' }
    ],
    destructiveText: 'Delete',
    cancelText: 'Cancel',
    cancel: function() {
      console.log('Cancelled!');
      IonActionSheet.isShown = false;
    },
    buttonClicked: function(index) {
      if (index === 0) {
        console.log('Shared!');
      }
      if (index === 1) {
        console.log('Moved!');
      }
      if (index === 2) {
        IonPopup.confirm({
          title: 'Exit hint?',
          template: 'Are you sure to exit app!?',
          onOk: function() {
            console.log('Exit app!');
            navigator.app && navigator.app.exitApp && navigator.app.exitApp();
          },
          onCancel: function() {}
        });
      }
      IonActionSheet.isShown = false;
      return true;
    },
    destructiveButtonClicked: function() {
      console.log('Destructive Action!');
      IonActionSheet.isShown = false;
      return true;
    }
  });
}

if(Meteor.isCordova) {
  document.addEventListener("menubutton", toggleIonActionSheet, false);
}

Template.actionSheet.events({
  'click [data-action=showActionSheet]': function (event, template) {
    toggleIonActionSheet();
  }
});
