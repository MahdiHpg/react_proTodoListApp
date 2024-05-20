import { Helmet } from "react-helmet-async";
import { useStateContext } from "../../context/ContextProvider";
import ViewTodo from "./ViewTodo";
import { PaginateButtons } from "../../helpers";
import { useState } from "react";

const TodoLists = () => {
  const { tasks, labelsByLang, perPage, rtlState } = useStateContext();
  const [itemOffset, setItemOffset] = useState(0);
  // console.log(
  //   "itemOffset is : " +
  //     itemOffset +
  //     " typeof perPage is : " +
  //     typeof itemOffset
  // );

  let tasksSort = tasks.sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  let endOffset, dataPaginate, pageCount;
  endOffset = itemOffset + perPage;
  // console.log(
  //   "endOffset is : " + endOffset + " typeof perPage is : " + typeof endOffset
  // );

  dataPaginate = tasksSort.slice(itemOffset, endOffset);
  // console.log(
  //   "dataPaginate is : " +
  //     dataPaginate +
  //     " typeof perPage is : " +
  //     typeof dataPaginate
  // );

  pageCount = Math.ceil(tasks.length / perPage);
  // console.log(
  //   "pageCount is : " + pageCount + " typeof perPage is : " + typeof pageCount
  // );

  return (
    <>
      <Helmet>
        <title>{`${labelsByLang.appName}`}</title>
      </Helmet>
      <div
        className={`w-full h-auto block 
      ${rtlState === "rtl" ? "dirRTL" : "dirLTR"}`}
      >
        <ul className="tasksListsParent sm:min-w-[500px] sm-max:min-w-[300px]">
          {tasks.length > 0 &&
            dataPaginate.map((task, index) => (
              <ViewTodo key={index} data={task} />
            ))}
        </ul>
        {tasks.length === 0 && (
          <li className="tasksLists text-center">
            {labelsByLang?.noExistTodo}
          </li>
        )}
        {tasks.length !== 0 && (
          <PaginateButtons
            pageCount={pageCount}
            perPage={perPage}
            setItemOffset={setItemOffset}
          />
        )}
      </div>
    </>
  );
};
export default TodoLists;
