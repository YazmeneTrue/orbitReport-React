// import React from "react";
import satData from "./satData";
import './styling.css';


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};
// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       {displaySats.map((sat) => (
//         <button onClick={() => filterByType(sat)} key={sat.id}>
//           {sat} Orbit
//         </button>
//       ))}
//       <button onClick={() => setSat(satData)}>All Orbits</button>
//     </div>
//   );
// };

export default Buttons;