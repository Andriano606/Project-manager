import React from 'react';

import './EmptyProjectPage.css';
import { ReactComponent as Book } from '../../assets/book.svg';

function EmptyProjectPage() {
  return (
    <>
      <p>Hello World</p>
      <Book className="book-logo"/> 
    </>
  );
}

export default EmptyProjectPage;
