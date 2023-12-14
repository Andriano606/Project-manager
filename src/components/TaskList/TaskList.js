import React, { useState } from 'react';

import './TaskList.css';

function TaskList(props) {
  const [tasks, setTasks] = useState(props.project.tasks)

  const remove_task_handler = (event) => {
    let id = event.target.getAttribute('item_id')

    props.project.deleteTask(id)
  
    setTasks(tasks.filter(item => item.id !== id))
  }

  const listItems = props.project.tasks.map((item) => { 
    return <li key={item.id} className='flex justify-between m-2'>
      {item.title}
      <button item_id={item.id} onClick={remove_task_handler} className='btn btn-outline-danger'>
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
