import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import Specs from "./components/Specs/Specs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section />
      <Specs />
      <Footer />
    </div>
  );
}

export default App;
