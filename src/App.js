import './App.scss';
import CharList from './components/CharList';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Crie e gerencie seus personages de RPG</h1>
        <div className="buttonArea">
          <button className="button">Criar</button> <button className="button button--outline">Ver Código</button>
        </div>
      </header>
      <main>
          <h1>Seus Personagens</h1>
          <CharList/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
