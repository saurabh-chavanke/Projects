import { useState,useEffect } from "react";
import Navbar from "./Components/navbar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { FaRegEdit} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    if(todosString){
      let tod = JSON.parse(localStorage.getItem("todos"))
      settodos(tod)
    }
    

  }, [])
  

  const saveTool = (params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const handleEdit = (e,id) => {
    let t = todos.filter(i=>i.id==id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id!=id
    });
    settodos(newTodos);
    saveTool()
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id!=id
    });
    settodos(newTodos);
    saveTool()
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    saveTool()
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handelCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id == id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    saveTool()
  };
 
  const togglefinished =(e) =>{
    setshowfinished(!showfinished)
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto bg-slate-300 h-100 p-5 w-full md:w-1/2">
      <h1 className="font-bold text-center text-xl">iTodo - Manage your Todos at one place</h1>
        <div className="addtodo gap-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="my-5 w-full rounded-full p-2"
          />
          <button
            onClick={handleAdd}
            disabled = {todo.length<=0}
            className=" w-full bg-violet-700 disabled:opacity-40 p-3 py-1 mb-5 rounded-md hover:bg-violet-900 text-white font-bold"
          >
            Add
          </button>
        </div>
        <input className="p-5 text-lg"  onChange={togglefinished} type="checkbox" checked={showfinished} /> Show Finished Todo
        <h2 className="text-lg font-bold mt-5">Your Todos</h2>
        <div className="todos">
          {todos.map((items) => {


            return (showfinished || !items.isCompleted) && (
              <div
                key={items.id}
                className="todo flex my-7 w-full"
              >
                <input
                  onChange={handelCheckbox}
                  name={items.id}
                  type="checkbox"
                  checked={items.isCompleted}
                />
                <div className={items.isCompleted ? "line-through text-lg w-3/4 mx-4" : "text-lg w-3/4 mx-4"}>
                  {items.todo}
                </div>
                <div className="button">
                  <button
                    onClick={(e) => {
                      handleEdit(e, items.id);
                    }}
                    className="bg-violet-700 p-3 py-1 rounded-md hover:bg-violet-900 text-white font-bold mx-6"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, items.id);
                    }}
                    className="bg-violet-700 p-3 py-1 rounded-md hover:bg-violet-900 text-white font-bold"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
