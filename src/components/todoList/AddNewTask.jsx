import { TbPencilPlus } from "react-icons/tb";
import { useStateContext } from "../../context/ContextProvider";

const AddNewTask = () => {
  const { setAddNewTask, rtlState } = useStateContext();

  return (
    <div
      className={`fixed bottom-16 flex flex-col justify-center
     items-center ${rtlState === "rtl" ? "left-10" : "right-10"}`}
    >
      <button
        className="size-16 text-3xl rounded-full bg-purple-900
      border-white text-center hover:opacity-80"
        onClick={() => setAddNewTask(true)}
      >
        <TbPencilPlus className="w-full" size={30} color="#fff" />
      </button>
    </div>
  );
};
export default AddNewTask;
