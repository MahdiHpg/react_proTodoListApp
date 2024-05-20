import { Tooltip } from "react-tooltip";
import { MdOutlineDoneAll } from "react-icons/md";
import { ImUndo } from "react-icons/im";
import { toast } from "react-toastify";
import { SwalToast } from "../../helpers";

const CompleteTaskBtn = ({
  id,
  taskComplete,
  tasks,
  setTasks,
  labelsByLang,
}) => {
  const handleComplete = () => {
    const indexFind = tasks.findIndex((task) => task.id === id);
    const bc_tasks = [...tasks];
    bc_tasks[indexFind] = {
      id: tasks[indexFind].id,
      title: tasks[indexFind].title,
      desc: tasks[indexFind].desc,
      dateTime: tasks[indexFind].dateTime,
      complete: !tasks[indexFind].complete,
    };
    setTasks(bc_tasks);
    if (taskComplete) {
      toast.error(labelsByLang?.ReturnTotheUncompletedState);
      // SwalToast("warning", labelsByLang?.ReturnTotheUncompletedState);
    } else {
      toast.success(labelsByLang?.doneTaskMsg);
      // SwalToast("success", labelsByLang?.doneTaskMsg);
    }
  };

  return (
    <>
      <button
        className="sm-max:w-full sm:w-[40px] sm-max:h-auto sm:h-full"
        data-tooltip-id={id}
        data-tooltip-content={
          taskComplete
            ? `${labelsByLang?.undoCompleteTooltip}`
            : `${labelsByLang?.completeTooltip}`
        }
        onClick={handleComplete}
      >
        {taskComplete ? (
          <ImUndo size={28} className="mx-auto" />
        ) : (
          <MdOutlineDoneAll size={28} className="mx-auto" />
        )}
      </button>
      <Tooltip id={id} style={{ backgroundColor: "#000", color: "#f00" }} />
    </>
  );
};
export default CompleteTaskBtn;
