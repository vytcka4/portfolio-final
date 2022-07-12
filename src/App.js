import "./App.css";
import Navbar from "./Components/Layout/NavBar";
import Main from "./Components/Layout/Main";
import Projects from "./Components/Layout/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
