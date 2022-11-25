import './App.css';
import ProduktComponents from './components/ProduktComponents/ProduktComponents';
import produkte from "./components/productArray/Array";

function App() {
  return (
    <div className="App">
      <h1>WhatsApp Gruppen Shop</h1>
      <h3>Komm in die Gruppe</h3>
      <div className='flex'>
        {produkte.map((produkt) => {
          return <ProduktComponents src={produkt.src} product={produkt.product} price={produkt.price} description={produkt.description} />;
        })}
      </div>
    </div>
  );
}

export default App;
