import './App.css';
import Header from './container/Header/Header';
import Navbar from './container/Navbar/Navbar';
import Projects from './container/Projects/Projects';
import backgroundVideo from './assets/background.mp4'

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar></Navbar>
      <Header></Header>
      <Projects></Projects>
    </div>
  );
}

export default App;
