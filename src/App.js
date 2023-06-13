import { useState } from "react";



function App() {

  const [work, setWork] = useState('')

  return (
      <h1 className="flex gap-8 h-screen justify-center border border-red-500 items-center">
        <input 
          type="text" 
          className="outline-none border border-blue-600 px-4 py-2 w-[300px]"
          value={work}
          onChange={e => setWork(e.target.value)}
        />

        <button
          type="button"
          className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
        >
          Add
        </button>
      </h1>
  );
}

export default App;
