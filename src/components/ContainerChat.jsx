import Chat from "./Chat";
import MateChat from "./MateChat";

const ContainerChat = () => {
  return (
    <div className="w-full h-[360px] py-10 flex flex-col gap-6 overflow-y-scroll">
      <MateChat />
      <Chat />
      <MateChat />
      <Chat />
      <MateChat />
      <Chat />
    </div>
  );
};

export default ContainerChat;
