const EditModal = ({openModal, setOpenModal, updateDescription, todo, setDescription, description}) => {
    if(!openModal){
        return null;
    }

    return <div
    class="modal"
    id={`id${todo.todo_id}`}
    onClick={() => setDescription(todo.description)}
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Todo</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            onClick={() => setDescription(todo.description)}
          >
            &times;
          </button>
        </div>

        <div class="modal-body">
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setOpenModal(false)}
          />
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-warning"
            data-dismiss="modal"
            onClick={e => updateDescription(e)}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default EditModal;