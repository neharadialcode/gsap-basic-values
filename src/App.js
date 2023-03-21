import logo from "./logo.svg";
import "./App.css";
import Hero from "./component/Hero";
import About from "./component/About";
import Service from "./component/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import NewArr from "./component/NewArr";
import Practice from "./component/Practice";
import NewFile from "./component/NewFile";

function App() {
  return (
    <div className="App">
      {/* <Hero />
      <About />
      <Service />
      <NewArr /> */}
      <Practice />
      <NewFile />
    </div>
  );
}

export default App;
