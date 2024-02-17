import { useState } from "react";
const InputChat = () => {
  const [value, setValue] = useState("");
  const submitButton = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="w-full flex justify-center items-center h-24 border">
      <form
        className="w-full flex justify-center items-center gap-4 px-8"
        onSubmit={submitButton}
      >
        <input
          type="text"
          className="focus:outline-cyan-200 border-none p-2 outline-none w-full rounded-md"
          placeholder="ketik disini"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 px-4 bg-cyan-500 text-white rounded-md hover:brightness-110"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default InputChat;
