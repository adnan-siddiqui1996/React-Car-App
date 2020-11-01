import firebase from './Firebase.jsx';

const CarProps = [
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Civic.jpg?raw=true.jpg", 
        imgalt:"Honda Civic",
        title:"Honda Civic 2020",
        price:"40 Lac Rs Only",
        weblink:"https://www.honda.com.my/model/civic?gclid=CjwKCAjww5r8BRB6EiwArcckCzuBEApI3qtbwKWkKnw8tsVJxAgteNTkKqB_FASf4XH3ijMu7Pvv4RoCGEMQAvD_BwE"             
    },
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Sportage.jpg?raw=true", 
        imgalt:"Kia Sportage",
        title:"Kia Sportage 2020",
        price:"65 Lac Rs Only",
        weblink:"https://www.kia.com/pk/showroom/sportage/features.html"
    },
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Corolla.jpg?raw=true", 
        imgalt:"Toyota Corolla",
        title:"Toyota Corolla 2020",
        price:"36 Lac Rs Only",
        weblink:"https://www.toyota.com/corolla/"             
    },
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Mercedes.jpg?raw=true", 
        imgalt:"Mercedes Benz",
        title:"Mercedes Benz 2020",
        price:"75 Lac Rs Only",
        weblink:"https://www.mercedesbenzoffortmitchell.com/upcoming-mercedes-benz-vehicle-releases/"             
    },
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Tucson.jpg?raw=true", 
        imgalt:"Hyundai Tucson",
        title:"Hyundai Tucson 2020",
        price:"56 Lac Rs Only",
        weblink:"https://www.hyundai-nishat.com/tucson"             
    },
    {
        imgsrc:"https://github.com/adnan-siddiqui1996/React-Car-App/blob/master/public/images/Audi.jpg?raw=true", 
        imgalt:"Audi RS 7",
        title:"Audi RS7 2020",
        price:"56 Lac Rs Only",
        weblink:"audi.com.pk/sea/web/pk.html"             
    }
];

firebase.database().ref('/').child("car").set(CarProps);

export default CarProps;