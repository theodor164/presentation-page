import './App.css';
import Header from './container/Header/Header';
import Navbar from './container/Navbar/Navbar';
import Projects from './container/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
    </div>
  );
}

export default App;
