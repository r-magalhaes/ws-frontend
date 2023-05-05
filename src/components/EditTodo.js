import React, { Fragment, useState } from "react";
import EditModal from "./EditModal";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const [openModal, setOpenModal] = useState(false);


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
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
        onClick={() => setOpenModal(true)}
      >
        Edit
      </button>

      <EditModal 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        updateDescription={updateDescription} 
        todo={todo}
        setDescription={setDescription}
        description={description}
      />
    </Fragment>
  );
};

export default EditTodo;
