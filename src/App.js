import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
