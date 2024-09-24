import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function Main() {
    const location = useLocation();
  
    // Liste des chemins pour lesquels le menu doit être masqué
    const hideMenuPaths = ['/composant1', '/composant2', '/composant3'];
  
    return (
      <div>
        {/* Afficher le menu seulement si on n'est pas sur une des pages à masquer */}
        {!hideMenuPaths.includes(location.pathname) && (
          <nav>
            <ul>
              <li>
                <Link to="/composant1">Afficher Composant 1</Link>
              </li>
              <li>
                <Link to="/composant2">Afficher Composant 2</Link>
              </li>
              <li>
                <Link to="/composant3">Afficher Composant 3</Link>
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
    );
  }

  export default Main;