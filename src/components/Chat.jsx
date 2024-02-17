const Chat = () => {
  return (
    <div className="w-full px-6 flex items-center justify-center gap-4">
      <div className="w-full p-2 bg-cyan-200 text-cyan-600 rounded-md relative after:w-6 after:h-6 after:absolute after:-right-1 after:top-2 after:rounded-sm after:bg-cyan-200 after:rotate-45">
        <p>hi how are you?</p>
      </div>
      <div className="rounded-full w-10 h-10 bg-cyan-500"></div>
    </div>
  );
};

export default Chat;
