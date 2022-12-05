import logo from "./logo.svg";
import "./App.css";
import Workspace from "./Components/Workspace";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/style.css";
import Add from "./Components/Add";
import { useEffect, useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  let [input, setinput] = useState({
    title: "",
    status: 'false',
    category: "",
    categories: [],
    color: "",
    id: 0,
  });
  return (
    <div className="App">
      <Workspace
        show={show}
        setShow={setShow}
        todos={todos}
        setTodos={setTodos}
        input={input}
        setinput={setinput}
      />
      <Add
        show={show}
        setShow={setShow}
        todos={todos}
        setTodos={setTodos}
        input={input}
        setinput={setinput}
      />
    </div>
  );
}

export default App;
