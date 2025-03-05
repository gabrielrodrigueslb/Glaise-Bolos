import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import PageTransition from './components/PageTransition';
import Temas from './pages/Temas';
import Home from './pages/Home';
import Results from './pages/Results/Results';
import themes from './api/api';


function App() {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="themes"
              element={
                <PageTransition>
                  <Temas />
                </PageTransition>
              }
            />
            <Route
              path="results/:id"
              element={
                <PageTransition>
                  <Results />
                </PageTransition>
              }
            />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
