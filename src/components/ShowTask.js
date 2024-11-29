import React from 'react'

function ShowTask({taskList,setTasklist,task,setTask}) {

  const handelEdit=(id)=>{

  }
 
const handleDelete=(id)=>{

updatedTaskList=taskList.filter(todo =>todo.id!==id)
setTasklist(updatedTaskList)
}

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((todo) => (
          <li key={task.id}>
            <p>
              <span className="name">{todo.name} </span>
              <span className="time">{todo.time}</span>
            </p>
            <i onClick={()=>handleEdit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={()=>handleDelete(todo.id)}  className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTask
