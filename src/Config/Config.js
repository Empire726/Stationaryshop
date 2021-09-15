import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyCa3W7sSQwYYQ4IlN34UKcwlhkX2Gxol_M',
  authDomain: 'phuja-shop.firebaseapp.com',
  projectId: 'phuja-shop',
  storageBucket: 'phuja-shop.appspot.com',
  messagingSenderId: '1026585063190',
  appId: '1:1026585063190:web:cd5515540328ee7aefea37',
  measurementId: 'G-NWEF12TEBT',
};



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }