import React from 'react';

import Nav from './Nav';
import Form from './Form';

const Header = (props) => {
  return (
    <header>
      <Form onSearch={props.onSearch} />

      <Nav />
    </header>
  );
}

export default Header;