import BottomBar from "./BottomBar";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-52 bg-neutral-800 text-white flex flex-col">
        <div className="mt-auto">
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
