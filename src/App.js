import './App.css';
import Header from './components/Haeder/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import WordsTable from './components/WordsTable/WordsTable';
import Gameset from './components/Gameset/GameSet';


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
