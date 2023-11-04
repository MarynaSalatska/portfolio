import About from './About/About';
import Contacts from './Contacts/Contacts';

import Header from './Header/Header';
import Projects from './Projects/Projects';

export const App = () => {
  return (
    <div>
      <Header />
      <About />

      <Projects />
      <Contacts />
    </div>
  );
};
