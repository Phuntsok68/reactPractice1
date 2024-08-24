import React from "react";
import ReactDom from "react-dom";
// ReactDom.render(
//   <div>
//     <h1>My favorite foods:</h1>
//     <ul>
//       <li>Noodles</li>
//       <li>Brocolli</li>
//       <li>Pasta</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// const name='Tenzin';
// ReactDom.render(<h1>Hello {name}</h1>, document.getElementById('root'));
// const luckyNum = Math.floor(Math.random() * 100) + 1;
// ReactDom.render(
//   <div>
//     <h1>Hello World </h1>
//     <p>Your lucky number is {luckyNum}</p>
//   </div>,
//   document.getElementById("root")
// );

// const fName = "Angela";
// const lName = "Yu";
// ReactDom.render(
//   <h1>Hello {`${fName} ${lName}`}</h1>,
//   document.getElementById("root")
// );
const name = "Tenzin";
const currentDate = new Date();
const year = currentDate.getFullYear();
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
