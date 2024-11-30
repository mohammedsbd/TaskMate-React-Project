import React from 'react'

function AddTask({taskList,setTasklist, task,setTask}) {

  const handelSubmit=(e)=>{
    e.preventDefault();


    if(task.id){
const date=new Date()
const updatedTaskList = taskList.map((todo) =>
  todo.id === task.id
    ? {
        id: task.id,
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      } :todo
    
);
setTasklist(updatedTaskList);
setTask({})

    }else{
  const date = new Date();
  console.log(e.target.task.value);
  console.log(date.getTime());
  const newTask = {
    id: date.getTime(),
    name: e.target.task.value,
    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
  };
  setTasklist([...taskList, newTask]);
  e.target.task.value = "";
    }


  

  }


  return (
 <section className="addTask">
    <form onSubmit={handelSubmit}>
        <input  value={task.name}  type="text" name='task' autoComplete='off' placeholder='addTask' maxLength={25} onChange={e=>setTask({...task, name: e.target.value})}/>
        <button type='submit'>Add Task</button>
    </form>
 </section>
  )
}

export default AddTask
