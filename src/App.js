// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './Home';

// function App() {
//   return (
//  <Router>
//         <Routes>
//           <Route exact path="/" component={Home} />
          
//         </Routes>
//       </Router>
//     );
//   }
  


// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Home/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;