import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import './global.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='row'>
        <Main />
        <Cart />
      </div>
    </div>
  );
}

export default App;