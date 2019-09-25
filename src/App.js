import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ToDoList from './components/ToDoList'
import NavBar from './components/NavBar'
import AddTask from './components/AddTask'
import ToDo from './components/ToDo'
import initialData from './data/initialData'
import uniqid from 'uniqueid'

const App = () => {
  const [taskList, setTaskList] = useState(initialData)
  const [newTask, setNewTask] = useState()

  const addTask = event => {
    event.preventDefault()
    let tempTask = {id: uniqid, name: newTask, completed: false}
    let list = taskList
    list.push(tempTask)
    setTaskList(list)
    setNewTask()
  }

  const handleTaskChange = event => {
    setNewTask(event.target.value)
  }

  const handleChange = (taskId) => {
      let taskToUpdate = taskList.find(task => task.id === taskId)
      taskToUpdate.completed === true ? taskToUpdate.completed = false : taskToUpdate.completed = true
      setTaskList(prevTaskList => (
          prevTaskList.map(task => {
              return task.id === taskId ? taskToUpdate : task
          })
      ))
  }

  const fullList = () => taskList.map(task => <ToDo task={task} key={task.id} handleChange={() => handleChange(task.id)} />)

  const completedList = () => {
    let list = taskList.filter(task => task.completed === true)
    return (
      list.map(task => <ToDo task={task} key={task.id} handleChange={() => handleChange(task.id)} />)
    )
  }

  return (
    <section id="todo">
        
        <Router> 
          <Switch> 
            <Route path="/add-task" render={
                () => <AddTask task={newTask} change={handleTaskChange} add={addTask} />
              } 
            /> 
            <Route path="/:filter?" render={
                (props) => <ToDoList 
                  {...props} 
                  showAll={fullList} 
                  showCompleted={completedList} 
                />
              } 
            />
          </Switch> 
          <NavBar /> 
        </Router>
    </section>
  );
}

export default App;
