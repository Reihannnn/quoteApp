import { useState } from "react";
import axios from "axios";

export const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await axios.post("http://localhost:5000/quotes", body, {
        headers: { "Content-Type": "application/json" },
      });

      // menampilkan alert untuk pemberitahuan
      if (response) {
        alert("data added succesfully");
      } else {
        alert("data added failed");
      }

      console.log(response);
      window.location ="/"; // mengembalikan ke home agar rerendering terjadi
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center p-5">
        <form className="flex gap-1" onSubmit={onSubmitForm}>
          <div>
            <input
              type="text"
              name="description"
              value={description}
              className="border-2 p-2 w-full"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className=" bg-green-500 p-2 font-bold rounded-sm">
            add
          </button>
        </form>
      </div>
    </>
  );
};
