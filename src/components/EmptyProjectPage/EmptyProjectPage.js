import React from 'react';

import './EmptyProjectPage.css';
import { ReactComponent as Book } from '../../assets/book.svg';

function EmptyProjectPage(props) {
  const addNewProjectHandler = () => {
    props.onAddNewProject(true)
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <Book className="book-logo"/> 
      <p className='font-bold text-2xl text-slate-500'>No Project Selected</p>
      <p className="text-slate-500"> Select a project or get started with a new one</p>
      <button type="button" className="btn btn-secondary" onClick={addNewProjectHandler}>
            Create new project
      </button>
    </div>
  );
}

export default EmptyProjectPage;
