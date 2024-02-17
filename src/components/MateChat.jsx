const Chat = () => {
  return (
    <div className="w-full px-6 flex items-center justify-center gap-4 ">
      <div className="rounded-full w-10 h-10 bg-red-600"></div>
      <div className="w-full p-2 bg-red-200 text-red-500 rounded-md relative after:w-6 after:h-6 after:absolute after:-left-1 after:top-2 after:rounded-sm after:bg-red-200 after:rotate-45">
        <p>hi how are you?</p>
      </div>
    </div>
  );
};

export default Chat;
