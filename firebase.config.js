const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAMd_MG48BHjFL4EvQK80WNbCfyTNEU5Ic",
    authDomain: "nysee-d8e7f.firebaseapp.com",
    databaseURL: "https://nysee-d8e7f.firebaseio.com",
    storageBucket: "nysee-d8e7f.appspot.com",
    messagingSenderId: "271947957274"
  };
firebase.initializeApp(config);

module.exports = firebase;
