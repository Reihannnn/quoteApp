import axios from "axios";
import { useState } from "react";

export const EditTodo = ({ quote }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(quote.quotes_description);

  const onEditQuote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/quote/${quote.quotes_id}`, {
        description: description,
      });

      if (response) {
        alert("data update succesfully");
        window.location = "/";
      }

      if (!response) {
        alert("data update failed");
      }

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        className="text-white  bg-blue-500 active:bg-blue-700 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() =>{
          setDescription(quote.quotes_description)
          setShowModal(true)
        }

        }
      >
        edit
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            id={`id${quote.quotes_id}`}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Quote</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    className="w-full p-3 border-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // mendapatkan nilai baru
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end gap-5 p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 hover:bg-red-500 hover:text-white background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-700 hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={e =>  onEditQuote(e)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
