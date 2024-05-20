import { useParams } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import ActionsTodo from "./ActionsTodo";
import CompleteTaskBtn from "./CompleteTaskBtn";
import ShowTime from "./ShowTime";
import { TitleHeaders } from "../../helpers";
import { Helmet } from "react-helmet-async";

const ViewTodo = ({ data }) => {
  const { tasks, setTasks, labelsByLang, langSelected } = useStateContext();
  const { id: idTask } = useParams();
  //   id && console.log(id);

  let task;
  if (idTask) {
    task = tasks.filter((item) => item.id === idTask)[0];
    // console.log(task);
  } else task = data;

  return idTask ? (
    <ul className="tasksListsParent">
      <Helmet>
        <title>
          {`${task.title}`} | {`${labelsByLang.appName}`}
        </title>
      </Helmet>
      {idTask && (
        <TitleHeaders
          className={"w-full text-white text-center text-2xl"}
          title={labelsByLang?.viewTooltip}
        />
      )}
      <li
        className="tasksLists sm:w-[620px] sm-max:min-w-[300px]
              sm-max:w-[100%] "
        data-aos="fade-left"
      >
        <div className="item-task-title sm-max:flex-col sm:flex-row">
          {/* title */}
          <h5
            className="sm-max:order-2 sm:order-1 
                border-b-[1px] pb-1 border-dashed border-slate-500"
          >
            {task.title}
          </h5>
          {/* time */}
          <span className="sm-max:order-3 sm:order-2">
            <ShowTime isoTime={task.dateTime} langSelected={langSelected} />
          </span>
          {/* actions */}
          <ActionsTodo
            viewSide={"true"}
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
            title={task.title}
            labelsByLang={labelsByLang}
            langSelected={langSelected}
          />
        </div>
        {/* desc */}
        <div className="item-task-desc sm-max:flex-col sm:flex-row">
          <p className="taskDesc">
            {!idTask && task.desc.length > 100
              ? task.desc.substring(0, 100) + "..."
              : idTask && task.desc}
          </p>

          {/* complete task btn */}
          <CompleteTaskBtn
            id={task.id}
            taskComplete={task.complete}
            tasks={tasks}
            setTasks={setTasks}
            labelsByLang={labelsByLang}
          />
        </div>
      </li>
    </ul>
  ) : (
    <li
      className="tasksLists sm:w-[620px] sm-max:min-w-[300px]
              sm-max:w-[100%] "
      data-aos="fade-left"
    >
      <div className="item-task-title sm-max:flex-col sm:flex-row">
        {/* title */}
        <h5
          className="sm-max:order-2 sm:order-1 
                border-b-[1px] pb-1 border-dashed border-slate-500"
        >
          {task.title}
        </h5>
        {/* time */}
        <span className="sm-max:order-3 sm:order-2">
          <ShowTime isoTime={task.dateTime} langSelected={langSelected} />
        </span>
        {/* actions */}
        <ActionsTodo
          id={task.id}
          tasks={tasks}
          setTasks={setTasks}
          title={task.title}
          labelsByLang={labelsByLang}
          langSelected={langSelected}
        />
      </div>
      {/* desc */}
      <div className="item-task-desc sm-max:flex-col sm:flex-row">
        <p className="taskDesc">
          {task.desc.length > 100
            ? task.desc.substring(0, 100) + "..."
            : task.desc}
        </p>

        {/* complete task btn */}
        <CompleteTaskBtn
          id={task.id}
          taskComplete={task.complete}
          tasks={tasks}
          setTasks={setTasks}
          labelsByLang={labelsByLang}
        />
      </div>
    </li>
  );
};
export default ViewTodo;
