import * as firebase from 'firebase/app';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyCriC0vF92EVY-iUZTWgJBD1QfA9NZnSZQ",
    authDomain: "react-car-app-012.firebaseapp.com",
    databaseURL: "https://react-car-app-012.firebaseio.com",
    projectId: "react-car-app-012",
    storageBucket: "react-car-app-012.appspot.com",
    messagingSenderId: "962800109727",
    appId: "1:962800109727:web:76ec2900a8d077e0553aaa",
    measurementId: "G-KBNRX8M3Q4"
};

export default firebase.initializeApp(firebaseConfig);