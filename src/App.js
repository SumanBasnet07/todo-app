import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value); // Only update the task
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.trim()&&date==="") return;
    setTodos([...todos, task]);
    setTask("");
    setDates([...dates, date]);
    setDate("");
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDelete = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCheckBox = (e) => {
    e.target.closest(".print").querySelector('li').classList.toggle("nocomp");
  };

  const handleEdit = (index) => {
    const newTodos = [...todos];
    const updatedText = prompt("Edit your task:", newTodos[index]);
    if (updatedText !== null) {
      newTodos[index] = updatedText;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="todo">
          <h1>Add Task</h1>
          <form>
            <input type="text" placeholder="Add Task" value={task} onChange={handleChange} />
            <input type="date" placeholder="Enter Date" value={date} onChange={handleDate} />
            <button onClick={handleAdd} className="addTask">Add Task</button>
          </form>
          <div className="your-todos">
            <h1>Your Todos</h1>
            <ol className="or-list">
              {todos.map((todo, index) => (
                <div className="print" key={index}>
                  <input type="checkbox" onChange={handleCheckBox} />
                  <li className="print-list">{todo}<span>{dates[index]}</span></li> {/* Correctly display the date */}
                  <div className="buttons">
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
