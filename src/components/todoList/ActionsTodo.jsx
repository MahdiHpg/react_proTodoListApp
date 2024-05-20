import { GrEdit } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";
import { RiSearchEyeLine } from "react-icons/ri";
import { MdArrowBack } from "react-icons/md";
import UseTooltip from "../../helpers/UseTooltip";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ActionsTodo = ({
  viewSide = false,
  id,
  tasks,
  setTasks,
  title,
  labelsByLang,
  langSelected,
}) => {
  const navigate = useNavigate();

  const deleteTextSwal =
    langSelected.value === "per"
      ? `آیا از حذف ${title} مطمئن هستی؟!`
      : `Are you sure you want to delete ${title}?`;

  const deleteConfirmedTextSwal =
    langSelected.value === "per"
      ? `مورد ${title} با موفقیت حذف شد`
      : `The item ${title} was successfully deleted`;

  // Todo: delete a task
  const handleDelete = (e) => {
    e.preventDefault();

    const filterTasks = tasks.filter((task) => task.id !== id);

    Swal.fire({
      title: `${labelsByLang?.deleteTitleSwal}`,
      text: deleteTextSwal,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${labelsByLang?.deleteConfirmBtnSwal}`,
      cancelButtonText: `${labelsByLang?.deleteCancelBtnSwal}`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${labelsByLang?.deleteConfirmedTitleSwal}`,
          text: deleteConfirmedTextSwal,
          icon: "success",
          confirmButtonText: `${labelsByLang?.deleteConfirmedOKSwal}`,
        });
        setTasks(filterTasks);
        viewSide && navigate("/react_proTodoListApp/");
      }
    });
  };

  return (
    <div
      className="flex flex-row justify-end items-center 
      sm-max:order-1 sm:order-3
    gap-2 flex-wrap"
    >
      {/* view */}
      {!viewSide ? (
        <UseTooltip
          Tag={"Link"}
          linkPath={`/react_proTodoListApp/viewTodo/${id}`}
          className={"viewBtn bg-blue-900 p-2 rounded-lg"}
          Icon={RiSearchEyeLine}
          name={"actionView"}
          title={labelsByLang?.viewTooltip}
          bgColor={"#1e3a8a"}
          color={"#fff"}
          size="16px"
        />
      ) : (
        <UseTooltip
          Tag={"Link"}
          linkPath={"/react_proTodoListApp/"}
          className={"viewBtn bg-blue-900 p-2 rounded-lg"}
          Icon={MdArrowBack}
          name={"backToHome"}
          title={labelsByLang?.backToHomeTooltip}
          bgColor={"#1e3a8a"}
          color={"#fff"}
          size="16px"
        />
      )}
      {/* edit */}
      <UseTooltip
        Tag={"Link"}
        linkPath={`/react_proTodoListApp/editTodo/${id}`}
        className={"viewBtn bg-orange-800 p-2 rounded-lg"}
        Icon={GrEdit}
        name={"actionEdit"}
        title={labelsByLang?.editTooltip}
        bgColor={"#9a3412"}
        color={"#fff"}
        size="16px"
      />
      {/* delete */}
      <UseTooltip
        Tag={"button"}
        className={"viewBtn bg-red-800 p-2 rounded-lg"}
        Icon={IoTrashOutline}
        setState={handleDelete}
        name={"actionDelete"}
        title={labelsByLang?.deleteTooltip}
        bgColor={"#991b1b"}
        color={"#fff"}
        size="16px"
      />
    </div>
  );
};
export default ActionsTodo;
