import "./App.css";
import Workspace from "./Components/Workspace";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/style.css";
import Add from "./Components/Add";
import { useEffect, useState } from "react";
function App() {
  const [methods, setmethods] = useState({
    search: "",
    categories: "",
    status: "All",
  });
  const [show, setShow] = useState(false);
  const [thisCat, setThisCat] = useState("All");
  const [stableData, setStableData] = useState([]);
  const [todos, setTodos] = useState(stableData);
  useEffect(() => {
    if (todos.length === 0) {
      setTodos(stableData);
    }
  }, [stableData]);
  let [input, setinput] = useState({
    title: "",
    status: "false",
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
        stableData={stableData}
        setStableData={setStableData}
        methods={methods}
        setmethods={setmethods}
        thisCat={thisCat}
        setThisCat={setThisCat}
      />
      <Add
        show={show}
        setShow={setShow}
        todos={todos}
        setTodos={setTodos}
        input={input}
        setinput={setinput}
        stableData={stableData}
        setStableData={setStableData}
        methods={methods}
        setmethods={setmethods}
      />
    </div>
  );
}

export default App;
