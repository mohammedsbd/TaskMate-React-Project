import React from 'react'

function AddTask({taskList,setTasklist}) {

  const handelSubmit=(e)=>{
    e.preventDefault();
    const date=new Date()
    console.log(e.target.value)
    console.log(date)
    // const newTask={
    //   id:date.getTime(),
    //   name:e,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}

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
