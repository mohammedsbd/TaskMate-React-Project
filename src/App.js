import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [taskList,setTasklist]=useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [task,setTask] = useState({})


  // evrytime we update out task list we set into our local storage
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList));  // Save the taskList to local storage every time it changes.
  } ,[taskList]);
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
