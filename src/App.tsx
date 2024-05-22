// src/routes/index.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contact';
import Charts from './pages/Chart';
import Maps from './pages/Maps';

/**
 * The main application component that sets up the routing using React Router.
 * @component
 * @returns {JSX.Element} The rendered application component.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}

        {/* Route for the Contacts page */}
        <Route path="/" element={<Contacts />} />
        
        {/* Route for the Charts page */}
        <Route path="/charts" element={<Charts />} />
        
        {/* Route for the Maps page */}
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </Router>
  );
};

export default App;