import { Fragment } from "react";
import { InputTodo } from "./components/inputTodo";
import { ListTodo } from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold mt-10 text-center">QUOTES APPS</h1>
      <InputTodo></InputTodo>
      <ListTodo></ListTodo>
    </Fragment>
  );
}

export default App;
