import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import PageTransition from './components/PageTransition';
import Temas from './pages/Temas';
import Home from './pages/Home';
function App() {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/temas"
              element={
                <PageTransition>
                  <Temas />
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
