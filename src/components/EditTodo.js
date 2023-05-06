import React, { Fragment, useState } from "react";
import EditModal from "./EditModal";

const EditTodo = ({ showModal, setShowModal, todo }) => {
  const [description, setDescription] = useState(todo.description);

  //const [openModal, setOpenModal] = useState(false);

  const BE_HOST = process.env.REACT_APP_BE_HOST;

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://${BE_HOST}/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
        onClick={() => setShowModal(true)}>
        Edit
      </button>

      <EditModal 
        updateDescription={updateDescription} 
        todo={todo}
        showModal={showModal}
        setShowModal={setShowModal}
        description={description}
        setDescription={setDescription}
      />
    </Fragment>
  );
};

export default EditTodo;
