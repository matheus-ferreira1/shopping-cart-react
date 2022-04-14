import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import './global.scss'
import data from './data/data'

function App() {
  const { products } = data;

  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Main products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;