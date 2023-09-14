
import './App.css';
import Home from './components/Home';

import Layout from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
