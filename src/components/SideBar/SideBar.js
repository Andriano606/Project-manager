import React from 'react';

import './SideBar.css';
import ProjectList from '../ProjectList/ProjectList'

function SideBar(props) {
  const addNewProjectHandler = () => {
    props.onAddNewProjectHandler()
  }

  return (
    <>
      <p className="mt-3 text-3xl d-flex justify-content-center">YOUR PROJECTS</p>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark" onClick={addNewProjectHandler}>
            + Add Project
        </button>
      </div>
      <div className='mt-3 d-flex justify-content-center'>
        <ProjectList projects={props.projects} currentProject={props.currentProject} onOpenProjectPageHandler={props.onOpenProjectPageHandler}/>
      </div>
    </>
  );
}

export default SideBar;
