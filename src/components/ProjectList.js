import React from "react";

function ProjectList({ projects, onDelete }) {
  return (
    <div>
      <h2>Liste des Projets</h2>
      {projects.length === 0 ? (
        <p>Aucun projet pour le moment.</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
              {project.image && (
                <img src={project.image} alt={project.title} style={{ width: "100px" }} />
              )}
              <button onClick={() => onDelete(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
