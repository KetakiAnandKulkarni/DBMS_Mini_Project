// // import React from "react";
// // import { Helmet } from "react-helmet";
// // // import Login from "../src/components/Sections/Login.jsx";
// // // import { BrowserRouter,Router,Route } from "react-router-dom";
// // // Screens
// // import Landing from "./screens/Landing.jsx";

// // export default function App() {
// //   return (
// //     <>
// //       <Helmet>
// //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// //         <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
// //       </Helmet>
// //         <Landing />
// //     </>

    
// //   );
// // }

// import React from "react";
// import { Helmet } from "react-helmet";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from '../src/components/Sections/Login.jsx';
// import Services from '../src/components/Sections/Services.jsx'; // Import your Services component
// import Landing from "./screens/Landing.jsx";

// export default function App() {
//   return (
//     <>
//       <Helmet>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
//       </Helmet>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/services" element={<Services />} /> 
//           <Route path="/" element={<Landing />} exact /> // Add a route for your Landing component
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/components/Sections/Login.jsx'; // Import Login
import Signup from '../src/components/Sections/signup.jsx'; // Import Signup
import Services from '../src/components/Sections/Services.jsx'; // Import Services
import Landing from "./screens/Landing.jsx"; // Import Landing page

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} exact /> {/* Default route */}
          <Route path="/login" element={<Login />} />      {/* Login route */}
          <Route path="/signup" element={<Signup />} />    {/* Signup route */}
          <Route path="/services" element={<Services />} /> {/* Services route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
