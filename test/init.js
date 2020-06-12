var firebaseConfig = {
  apiKey: "AIzaSyC9K-JKtikMHuMZDRtDZnJxMw-FvZfGmsE",
  authDomain: "mybasicproject-flamrd.firebaseapp.com",
  databaseURL: "https://mybasicproject-flamrd.firebaseio.com",
  projectId: "mybasicproject-flamrd",
  storageBucket: "mybasicproject-flamrd.appspot.com",
  messagingSenderId: "542994657421",
  appId: "1:542994657421:web:9805b010bc6f29e454b2c4"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
