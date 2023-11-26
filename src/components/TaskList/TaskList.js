import React, { useState } from 'react';

import './TaskList.css';

function TaskList() {
  const [list, setList] = useState([{title: 'Learning React'}, {title: 'test2'}])

  const listItems = list.map((item) => { 
    return <li key={item.title} className='flex justify-between m-2'>
      {item.title}
      <button className='btn btn-outline-danger'>
        Clear
      </button>
    </li>
  });

  return (
    <div className='bg-slate-50 w-75 p-4 rounded'>
      <ul className="list-none pl-0">
        { listItems }
      </ul> 
    </div>
  );
}

export default TaskList;
