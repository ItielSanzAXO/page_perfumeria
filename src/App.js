// App.js
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'; // Importa el componente Header

function App() {
  return (
    <div className="App">
      <Header /> {/* Usa el componente Header */}
      <main>
        <h1>¡Bienvenido a Perfumería!</h1>
        <p>¡Estamos para servirte!</p>
      </main>
    </div>
  );
}

export default App;
