// import third-party modules
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  document.title = 'Home - Home Nav';

  return (
    <>
      <h1>Home</h1>
      <Link to='/about'>About</Link>
    </>
  );
}

export default Home;
