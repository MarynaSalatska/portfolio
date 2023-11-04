import React from 'react';
import css from './About.module.css';

const About = () => {
  return (
    <section className={css.about_container}>
      <h2>About Me</h2>
      <div className={css.about_info}>
        <img src={require('img/photo.jpeg')} alt="My imag" width={250} />
        <div>
          <p className={css.about_text}>Maryna Salatska</p>
          <p className={css.about_text}>
            I’m a junior full stack developer with a huge desire to improve my
            skills and grow up as strong specialist in the field of web
            development. I have the necessary basic skills in CSS, HTML, JS,
            React, Node.js.
          </p>
          <p className={css.about_text}>
            I love the process of turning ideas into interactive and visually
            appealing digital experiences.
          </p>

          <div className={css.about_wrapper}>
            <h1 className={css.about_title}>
              Let's do something incredibly cool /
            </h1>
          </div>
          <a href="https://drive.google.com/drive/u/0/folders/1J6CuuLUZ4KWN5Cdr2RpBBaLze3RtvTKx"></a>
        </div>
      </div>
    </section>
  );
};
export default About;
