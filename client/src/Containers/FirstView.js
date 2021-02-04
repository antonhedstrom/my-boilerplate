import React from 'react';

import BooksList from '../Components/BooksList';
import BookAdd from '../Components/BookAdd';

function FirstView({ ...rest }) {
  return (
    <div {...rest}>
      <h1>Books</h1>
      <br />
      <BookAdd />
      <br />
      <BooksList />
    </div>
  );
}

export default FirstView;
