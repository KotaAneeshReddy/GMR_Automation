// import "./Clients.css";

// import clientLogos from "../../data/ClientsLogo";

// function Clients() {
//   return (
//     <section className="clients">
//       <h2>Our Existing Clients</h2>
//       <div className="container clients_container">
//         <img className="client-logo" src={Client1} alt="Client.jpg" />
//         <img className="client-logo" src={Client2} alt="Client.jpg" />
//         <img className="client-logo" src={Client3} alt="Client.jpg" />
//         <img className="client-logo" src={Client4} alt="Client.jpg" />
//         <img className="client-logo" src={Client5} alt="Client.jpg" />
//         <img className="client-logo" src={Client6} alt="Client.jpg" />
//         <img className="client-logo" src={Client7} alt="Client.jpg" />
//         <img className="client-logo" src={Client8} alt="Client.jpg" />
//         <img className="client-logo" src={Client9} alt="Client.jpg" />
//       </div>
//     </section>
//   );
// }

// export default Clients;

// import React, { useState, useEffect } from "react";
// import "./Clients.css"; // Assuming you have a CSS file for styling
// import clientLogos1 from "../../data/ClientsLogo";

// const Clients = () => {
//   const clientLogos = clientLogos1;

//   const [currentSetIndex, setCurrentSetIndex] = useState(0);
//   const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentLogoIndex(
//         (prevIndex) => (prevIndex + 1) % clientLogos[currentSetIndex].length
//       );
//     }, 3000); // Change logo every 3 seconds, you can adjust this value as needed

//     return () => clearInterval(interval);
//   }, [currentSetIndex]);

//   useEffect(() => {
//     const rotationInterval = setInterval(() => {
//       setCurrentSetIndex(
//         (prevSetIndex) => (prevSetIndex + 1) % clientLogos.length
//       );
//     }, clientLogos[currentSetIndex].length * 3000); // Rotate to the next set of logos after displaying all logos in the current set

//     return () => clearInterval(rotationInterval);
//   }, [currentSetIndex, clientLogos]);

//   return (
//     <section className="clients-section">
//       <h2>Our Existing Clients</h2>
//       <div className="clients">
//         <img
//           src={clientLogos[currentSetIndex][currentLogoIndex]}
//           alt={`Logo`}
//         />
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React, { useState, useEffect } from "react";
// import "./Clients.css"; // Assuming you have a CSS file for styling
// import clientLogos1 from "../../data/ClientsLogo";

// const Clients = () => {
//   const clientLogos = clientLogos1;

//   const [currentSetIndex, setCurrentSetIndex] = useState(0);
//   const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

//   useEffect(() => {
//     console.log("Current Set Index Changed:", currentSetIndex);
//     const interval = setInterval(() => {
//       setCurrentLogoIndex(
//         (prevIndex) => (prevIndex + 1) % clientLogos[currentSetIndex].length
//       );
//     }, 3000); // Change logo every 3 seconds, you can adjust this value as needed

//     return () => clearInterval(interval);
//   }, [currentSetIndex, clientLogos]);

//   useEffect(() => {
//     console.log("Current Logo Index Changed:", currentLogoIndex);
//     const rotationInterval = setInterval(() => {
//       setCurrentSetIndex(
//         (prevSetIndex) => (prevSetIndex + 1) % clientLogos.length
//       );
//     }, clientLogos[currentSetIndex].length * 3000); // Rotate to the next set of logos after displaying all logos in the current set

//     return () => clearInterval(rotationInterval);
//   }, [currentSetIndex, currentLogoIndex, clientLogos]);

//   return (
//     <section className="clients-section">
//       <h2>Our Existing Clients</h2>
//       <div className="clients">
//         <img
//           src={clientLogos[currentSetIndex][currentLogoIndex]}
//           alt={`Logo`}
//         />
//       </div>
//     </section>
//   );
// };

// export default Clients;

import React, { useState, useEffect } from "react";
import "./Clients.css"; // Assuming you have a CSS file for styling
import clientLogos1 from "../../data/ClientsLogo";

const Clients = () => {
  const clientLogos = clientLogos1;

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    console.log("Current Set Index Changed:", currentSetIndex);
    const interval = setInterval(() => {
      setCurrentLogoIndex(
        (prevIndex) => (prevIndex + 1) % clientLogos[currentSetIndex].length
      );
    }, 3000); // Change logo every 3 seconds, you can adjust this value as needed

    return () => clearInterval(interval);
  }, [currentSetIndex, clientLogos]);

  useEffect(() => {
    console.log("Current Logo Index Changed:", currentLogoIndex);
    const rotationInterval = setInterval(() => {
      setCurrentSetIndex(
        (prevSetIndex) => (prevSetIndex + 1) % clientLogos.length
      );
    }, clientLogos[currentSetIndex].length * 3000); // Rotate to the next set of logos after displaying all logos in the current set

    return () => clearInterval(rotationInterval);
  }, [currentSetIndex, currentLogoIndex, clientLogos]);

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <section className="clients-section">
      <h2>Our Existing Clients</h2>
      {isMobile ? (
        <div className="clients">
          <img
            src={clientLogos[currentSetIndex][currentLogoIndex]}
            alt={`Logo`}
          />
        </div>
      ) : (
        <div className="clients">
          {clientLogos.map((set, index) => (
            <div key={index} className="client-set">
              {set.map((logo, logoIndex) => (
                <img key={logoIndex} src={logo} alt={`Logo`} />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Clients;
