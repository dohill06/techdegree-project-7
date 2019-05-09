import React from 'react';

import Nav from './Nav';
import Form from './Form';

const Header = (props) => {
  return (
    <header>
      <Form formSearch={props.onSearch} />

      <Nav />
    </header>
  );
}

export default Header;