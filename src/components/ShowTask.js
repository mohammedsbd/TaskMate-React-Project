import React from 'react'

function ShowTask() {
  return (
   <section className="showTask">
   <div className="head">
    <div> 
      <span className='title'>Todo</span>
      <span className='count'>0</span>
    </div>
    <button className='clearAll'>Clear All</button>
   </div>
   <ul>
    <li>
      <p>
        <span className='name'>Task A </span>
        <span className='time'>2:09:01 Am 9/14/2030</span>
      </p>
      <i className='bi bi-pencil-square'></i>
      <i className='bi bi-trash'></i>
    </li>
   </ul>
   </section>
  )
}

export default ShowTask
