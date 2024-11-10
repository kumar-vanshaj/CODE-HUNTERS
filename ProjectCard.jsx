import React from 'react';

const ProjectCard = () => {
  return (
    // Wrapping multiple elements in a parent div (fix for 'one parent element' error)
    <div className="project-card">
      {/* Ensure all expressions are properly enclosed in curly braces */}
      <div className="project-header">
        <h3>Project Title</h3>
      </div>
      
      <div className="project-details">
        {/* JSX expressions wrapped correctly */}
        <p>Details of the project go here.</p>
      </div>

      {/* Fixing closing tags for all opened JSX elements */}
      <div className="project-footer">
        <button>More Info</button>
      </div>
    </div>
  );
};

export default ProjectCard;
