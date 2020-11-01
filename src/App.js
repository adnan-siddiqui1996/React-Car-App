import React, { Component } from 'react';
import './App.css';
import Topbar from './Component/Topbar.jsx';
import Cards from './Component/Cards.jsx';
import Footer from './Component/Footer.jsx';
import CarProps from './Config/CarProps.jsx';
import firebase from 'firebase';


const ref = firebase.database().ref('car');

class App extends Component{
  render() {
    return(
      <React.Fragment>
        <Topbar />
        <div className="heading">
          <h1>Top cars in Pakistan</h1>
        </div>
        <div className="cardDiv">
          {CarProps.map((value, index) => {
            return(
              <Cards key={index}
              imgsrc = {value.imgsrc}
              imgalt = {value.imgalt}
              title = {value.title}
              price = {value.price}
              weblink = {value.weblink}
              />
              )
            })}
        </div>
        <Footer />
      </ React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <Topbar />
//       <div className="heading">
//         <h1>Top cars in Pakistan</h1>
//       </div>
//       <div className="cardDiv">
//         {CarProps.map((value, index) => {
//           return(
//             <Cards key={index}
//             imgsrc = {value.imgsrc}
//             imgalt = {value.imgalt}
//             title = {value.title}
//             price = {value.price}
//             weblink = {value.weblink}
//             />
//             )
//           })}
//       </div>
//       <Footer />
//     </ React.Fragment>
//   );
// }

export default App;
