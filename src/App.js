import './App.css';
import Header from './components/Haeder/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
              <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/game" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                    <Route path="/" element={<Home />} /> {/* Default route */}
                </Routes>
            </div>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
