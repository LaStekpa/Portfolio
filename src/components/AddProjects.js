import React, { useState } from "react";

function AddProject({ onAdd }) {
  // Définir des states pour les champs de formulaire
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  // Gérer l'ajout d'un projet
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { title, description, link, image };
    onAdd(newProject); // Appelle la fonction d'ajout passée en prop
    setTitle("");
    setDescription("");
    setLink("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un nouveau projet</h2>
      <div>
        <label>Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Lien</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div>
        <label>Image (URL)</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddProject;
