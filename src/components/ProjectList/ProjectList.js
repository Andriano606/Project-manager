import React from 'react';

import './ProjectList.css';

function ProjectList(props) {
  const listItems = props.projects.map((item) => { 
    return <li key={item.title} className='d-flex justify-content-center'>
      <button item_id={item.id} onClick={props.onOpenProjectPageHandler} className={`w-full m-1 btn d-flex justify-content-start ${props.currentProject === item ? "btn-dark" : "btn-outline-dark"}`}>
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
