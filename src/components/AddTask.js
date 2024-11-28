import React from 'react'

function AddTask({taskList,setTasklist}) {

  const handelSubmit=(e)=>{
    e.preventDefault();
    const date=new Date()
    console.log(e.target.task.value)
    console.log(date.getTime())
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTasklist([...taskList,newTask])
    e.target.task.value=""

  }


  return (
 <section className="addTask">
    <form onSubmit={handelSubmit}>
        <input type="text" name='task' autoComplete='off' placeholder='addTask' maxLength={25}/>
        <button type='submit'>Add Task</button>
    </form>
 </section>
  )
}

export default AddTask
