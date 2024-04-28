import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import WordsTable from './components/WordsTable';
import Gameset from './components/GameSet';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Gameset />
      <WordsTable />
      <Footer />
    </div>
  );
}

export default App;
