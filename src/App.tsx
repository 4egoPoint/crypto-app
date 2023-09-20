
import './App.css';
import Home from './components/Home';

import Layout from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCoin from './components/SingleCoin';


function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/coins/:id" element={<SingleCoin />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
