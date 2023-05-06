  const EditModal = ({ updateDescription, todo, showModal, setShowModal, description, setDescription }) => {
    if(!showModal){
        return null;
    }

    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center pt-80">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full">
            <div className=" px-4 py-3 border-b border-gray-200 bg-green-400">
              <h2 className="text-lg font-medium text-gray-900">Edit item</h2>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <input
                  type="text"
                  className="border-gray-200 border rounded py-2 px-3 w-full focus:border-green-400 drop-shadow-xl"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button 
                type="button" 
                onClick={e => updateDescription(e)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Edit
              </button>
              <button 
                type="button" 
                onClick={() => setShowModal(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditModal;