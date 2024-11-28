import React from 'react'

function AddTask() {
  return (
 <section className="addTask">
    <form action="">
        <input type="text" name='task' autoComplete='off' placeholder='addTask' maxLength={25}/>
        <button type='submit'>Add Task</button>
    </form>
 </section>
  )
}

export default AddTask
