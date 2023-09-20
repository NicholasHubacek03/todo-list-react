import { useState } from 'react'
import './App.css'

function App() {
  const [todoToAdd, setTodoToAdd] = useState<string>('')
  const [todoList, setTodoList] = useState<Array<string>>(['mow'])

  const deleteTodo = (index: number) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };
  
  return (
    <>
      <h1>To do list</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>add to list</p>
        <input
          type="text"
          value={todoToAdd}
          onChange={(e) => setTodoToAdd(e.target.value)}
        />
        <button
        onClick={()=> {
          let updatedTodoList = todoList;
          updatedTodoList.push(todoToAdd);
        
          
          
          setTodoList([ ...updatedTodoList]);
        }}>add</button>
          <ul>
          {todoList.map((todo, index) => (
            <><li key={index}>{todo}</li><button onClick={() => deleteTodo(index)}>X</button></>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
