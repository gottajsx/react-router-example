import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Router>
      <div>
        {showMenu && (
          <nav>
            <ul>
              <li>
                <Link to="/composant1" onClick={() => setShowMenu(false)}>
                  Afficher Composant 1
                </Link>
              </li>
              <li>
                <Link to="/composant2" onClick={() => setShowMenu(false)}>
                  Afficher Composant 2
                </Link>
              </li>
              <li>
                <Link to="/composant3" onClick={() => setShowMenu(false)}>
                  Afficher Composant 3
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <hr />

        <Routes>
          <Route path="/composant1" element={<Component1 />} />
          <Route path="/composant2" element={<Component2 />} />
          <Route path="/composant3" element={<Component3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
