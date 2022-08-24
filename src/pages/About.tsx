// import third-party modules
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  document.title = 'Home - Home Nav';

  return (
    <>
      <h1>About</h1>
      <Link to='/'>Home</Link>
    </>
  );
}

export default About;
