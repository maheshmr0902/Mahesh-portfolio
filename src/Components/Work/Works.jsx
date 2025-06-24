import React, { useEffect, useState } from 'react';
import { projectData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  const handleFilter = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="work-filters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleFilter(e, index)}
            className={`work-item ${active === index ? 'active-work' : ''}`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="work-container container grid">
        {projects.map((item) => (
          <WorkItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;




