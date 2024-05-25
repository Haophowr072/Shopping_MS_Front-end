import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetail';
import { Login,Home } from './pages';
import {Profile} from './pages/Profile';

import { Header } from './components';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;