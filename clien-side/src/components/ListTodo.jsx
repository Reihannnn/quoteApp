import axios from "axios";
import { useEffect, useState } from "react";
import { EditTodo } from "./EditTodo";

export const ListTodo = () => {
  const [allQuote, setAllQuote] = useState([]);

  const getQuote = async () => {
    try {
      const response = await axios.get("http://localhost:5000/quote");
      const data = response.data;
      setAllQuote(data);
    } catch (err) {
      console.error("erronya disini bossquh" + err.message);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  // const quoteMap = (quote) =>{
  //   quote.map(quote => {
  //     return(

  //     )
  //   })
  // }

  allQuote.map((value) => {
    console.log(value);
  });

  const deleteQoute = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/quote/${id}`);

      setAllQuote(allQuote.filter((quote) => quote.quotes_id !== id)); // update
    } catch (err) {
      console.log(err.message);
    }
  };

  // Sort data by quotes_id in ascending order before rendering
  const sortedQuotes = allQuote.sort((a, b) => a.quotes_id - b.quotes_id);

  return (
    <div className="flex w-full items-center justify-center flex-col gap-3 mb-10">
      <h1>List todo</h1>
      {/* <div className="p-3 border-2 flex w-2/4 justify-between items-center">
          <h1>quotes_description</h1>

          <div className="flex gap-4">
            <button className="bg-blue-500 p-3 text-white rounded-md">edit</button>
            <button className="bg-red-500 p-3 text-white rounded-md">delete</button>
          </div>
        </div> */}

      <table className="w-3/5 border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm font-semibold text-left">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Quotes</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm">
          {sortedQuotes.map((quote) => (
            <tr className="odd:bg-white even:bg-gray-50" key={quote.quotes_id}>
              <td className="px-4 py-2 border-b">{quote.quotes_id}</td>
              <td className="px-4 py-2 border-b">{quote.quotes_description}</td>
              <td className="px-4 py-2 border-b flex space-x-2">
                <EditTodo quote={quote}></EditTodo>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded font-bold hover:bg-red-600"
                  onClick={() => deleteQoute(quote.quotes_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
