import React from 'react';
import css from './Projects.module.css';
const Projects = () => {
  const myProjects = [
    {
      title: 'WebStudio',
      description:
        'IT company website with responsive layout, burger menu and a modal window. There are 3 pages with information about WEB Studio, portfolio and contacts',
      linkProject: 'https://marynasalatska.github.io/goit-markup-hw-08/',
      linkCode: 'https://github.com/MarynaSalatska/goit-markup-hw-08',
      image: require('img/webSite.png'),
    },
    {
      title: 'Ice Cream',
      description:
        'A website with a responsive layout. Role: Team Lead. Build project,check for errors and live page performance. Created markup. Added responsive SASS styles and slider.',
      linkProject: 'https://marynasalatska.github.io/bootcamp-project/',
      linkCode: 'https://github.com/MarynaSalatska/filmoteka',
      image: require('img/iceCream.png'),
    },
    {
      title: 'Filmoteka',
      description:
        'Application for choosing a movie. Role: Scrum Master. Conducts stand-up. Rendered Modal and showed movies via API. Saved and retrieved data from Local Storage',
      linkProject: 'https://marynasalatska.github.io/filmoteka/',
      linkCode: 'https://marynasalatska.github.io/filmoteka/',
      image: require('img/filmoteka.png'),
    },
  ];

  return (
    <section className={css.projects_container}>
      <h2>My projects</h2>
      <div className={css.projects_cards}>
        {myProjects.map((project, index) => (
          <div className={css.projects_card} key={index}>
            <a href={project.linkProject} target="new_blank">
              {' '}
              <img src={project.image} alt={project.title} width={600} />
            </a>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.linkProject} target="new_blank">
              Visit the site
            </a>
            <a href={project.linkCode} target="new_blank">
              View sourse
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
