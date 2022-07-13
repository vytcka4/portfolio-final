import "./App.css";
import Navbar from "./Components/Layout/NavBar";
import Main from "./Components/Layout/Main";
import Projects from "./Components/Layout/Projects";
import ABoutMe from "./Components/Layout/AboutMe";
import FirstPage from "./Components/UI/FIrstPage";

function App() {
  return (
    <div className="App">
      <FirstPage>
        <Navbar />
        <Main />
      </FirstPage>
      <Projects />
      <ABoutMe />
    </div>
  );
}

export default App;
