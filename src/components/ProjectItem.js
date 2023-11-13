import React from 'react';

function ProjectItem({ project, technologies }) {
  return (
    <li>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </ul>
    </li>
  );
}

export default ProjectItem;