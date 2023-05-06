import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const BE_HOST = process.env.REACT_APP_BE_HOST;

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://${BE_HOST}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-5xl text-center font-bold py-20">ToDo List</h1>
      <form onSubmit={onSubmitForm} className="flex items-center justify-center gap-4">
        <input
          type="text"
          className="border-gray-200 border rounded py-2 px-3 w-1/2 focus:border-green-400 drop-shadow-xl"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="bg-green-400 text-gray-700 py-2 px-5 rounded hover:bg-green-300 drop-shadow-md">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
