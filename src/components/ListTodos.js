import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const BE_HOST = process.env.REACT_APP_BE_HOST;

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://${BE_HOST}/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(`http://${BE_HOST}/todos`);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>

      <table className="flex flex-col">

        <thead className="flex justify-center items-center pt-10 w-full">
          <tr className="flex items-center justify-around w-full p-4 border-b drop-shadow-md">
            <th className="w-1/2">Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="flex flex-col justify-center items-center pt-4 w-full gap-4">
          {todos.map(todo => (
            <tr key={todo.todo_id} className="flex bg-gray-200 rounded justify-around items-center w-full p-2">
              <td className="w-1/2 text-center">{todo.description}</td>
              <td>
                <EditTodo 
                  showModal={showModal}
                  setShowModal={setShowModal}
                  todo={todo} 
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </Fragment>
  );
};

export default ListTodos;
