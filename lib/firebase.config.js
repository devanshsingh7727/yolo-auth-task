// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9EWy3C2CRnxussqnrRxeZa040fz19cLg',
  authDomain: 'otp-tester-75398.firebaseapp.com',
  projectId: 'otp-tester-75398',
  storageBucket: 'otp-tester-75398.appspot.com',
  messagingSenderId: '309598187824',
  appId: '1:309598187824:web:9727d8410949a0a3f498f5',
  measurementId: 'G-D7Z95KR6XS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
