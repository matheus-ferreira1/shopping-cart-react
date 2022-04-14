import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import './global.scss'
import data from './data/data'
import { useState } from 'react';

function App() {
  const [carItems, setCarItems] = useState([])

  const { products } = data;

  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Main products={products} />
        <Cart carItems={carItems} />
      </div>
    </div>
  );
}

export default App;