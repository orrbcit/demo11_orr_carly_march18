//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {

  // Add your own Firebase configuration here

  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();