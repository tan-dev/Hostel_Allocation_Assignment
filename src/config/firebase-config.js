import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyBkEeq-tlj8YiAHuXFb7FK-TBCj7g7aFAU",
    authDomain: "hostel-booking-app-9d9f0.firebaseapp.com",
    projectId: "hostel-booking-app-9d9f0",
    storageBucket: "hostel-booking-app-9d9f0.appspot.com",
    messagingSenderId: "171680093550",
    appId: "1:171680093550:web:32412b537c188b37891d7f",
    measurementId: "G-XD065XTYZJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;