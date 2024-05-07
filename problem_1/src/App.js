import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ThemeSwitcher from './context/ThemeSwitcher';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
