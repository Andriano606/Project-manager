import React, { useState } from 'react';

import './ProjectList.css';

function ProjectList(props) {
  

  const listItems = props.projects.map((item) => { 
    return <li key={item.title} className='d-flex justify-content-center'>
      <button className='w-full m-1 btn btn-outline-dark d-flex justify-content-start'>
        {item.title}
      </button>
    </li>
  });

  return (
    <ul className="list-none text-bold text-lg w-2/3 mt-5">
      { listItems }
    </ul> 
  );
}

export default ProjectList;
