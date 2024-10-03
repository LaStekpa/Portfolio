import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";

function App() {
  // State pour stocker les projets
  const [projects, setProjects] = useState([]);

  // Ajoute un projet
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // Supprime un projet
  const deleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <section id="admin">
          <h2>Interface Admin</h2>
          <AddProject onAdd={addProject} />
          <ProjectList projects={projects} onDelete={deleteProject} />
        </section>
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
