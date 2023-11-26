import React from 'react';

import './SideBar.css';
import ProjectList from '../ProjectList/ProjectList'

function SideBar() {
  return (
    <>
      <p className="mt-3 text-3xl d-flex justify-content-center">YOUR PROJECTS</p>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark" >
            + Add Project
        </button>
      </div>
      <div className='mt-3 d-flex justify-content-center'>
        <ProjectList />
      </div>
    </>
  );
}

export default SideBar;
