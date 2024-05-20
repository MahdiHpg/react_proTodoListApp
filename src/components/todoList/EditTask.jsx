import { useNavigate, useParams } from "react-router-dom";
import { SwalEditAlert, TitleHeaders } from "../../helpers";
import { useFormik } from "formik";
import { validationSchema } from "../../validations/validationSchema";
import { useStateContext } from "../../context/ContextProvider";
import { Helmet } from "react-helmet-async";

const EditTask = () => {
  const { id: editId } = useParams();
  const { tasks, setTasks, labelsByLang } = useStateContext();
  let taskInfo = tasks.find((task) => task.id === editId);
  //   console.log(taskInfo);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/viewTodo/${editId}`);
  };

  // Todo: edit a task
  const handleEdit = (values) => {
    const findIndex = tasks.findIndex((task) => task.id === editId);
    // console.log(findIndex);
    // Todo: edit
    const bc_tasks = [...tasks];
    bc_tasks[findIndex] = {
      id: editId,
      title: values.titleTask,
      desc: values.descTask,
      dateTime: taskInfo.dateTime,
      complete: taskInfo.complete,
    };

    SwalEditAlert(labelsByLang, setTasks, bc_tasks, handleNavigate);

    // ! alert
    // Swal.fire({
    //   title: `${labelsByLang?.editTitleSwal}`,
    //   text: `${labelsByLang?.editTextSwal}`,
    //   icon: "question",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: `${labelsByLang?.editConfirmBtnSwal}`,
    //   cancelButtonText: `${labelsByLang?.editCancelBtnSwal}`,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: `${labelsByLang?.editConfirmedTitleSwal}`,
    //       text: `${labelsByLang?.editConfirmedTextSwal}`,
    //       icon: "success",
    //       confirmButtonText: `${labelsByLang?.editConfirmedOKSwal}`,
    //     });
    //     setTasks(bc_tasks);
    //     handleNavigate();
    //   }
    // });
  };

  const formik = useFormik({
    initialValues: {
      titleTask: taskInfo.title,
      descTask: taskInfo.desc,
    },
    validationSchema: validationSchema(labelsByLang),
    onSubmit: (values) => {
      handleEdit(values);
    },
  });

  return (
    <div className="tasksListsParent">
      <Helmet>
        <title>
          {`${taskInfo.title}`} | {`${labelsByLang?.appName}`}
        </title>
      </Helmet>
      <TitleHeaders
        className={"w-full text-white text-center text-2xl"}
        title={`${labelsByLang?.editTooltip} ${taskInfo.title}`}
      />
      <div
        className="tasksLists sm:w-[620px] sm-max:min-w-[300px]
              sm-max:w-[100%] "
        data-aos="fade-left"
      >
        <div className="item-task-title sm-max:flex-col sm:flex-row">
          <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            className="w-full"
          >
            <div
              className="mt-2 flex flex-col justify-start text-start
                 items-center gap-6"
            >
              <div className="w-full flex flex-col justify-start items-center gap-2">
                {/* subject */}
                <label htmlFor="topicTodo" className="w-full text-sm">
                  {labelsByLang?.addNewSubject}
                </label>
                <input
                  id="topicTodo"
                  className="form-input rounded-md px-4 py-3 w-full text-sm"
                  placeholder={labelsByLang?.addNewSubject}
                  name="titleTask"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.titleTask}
                />
                {/* نمایش خطا در صورت وجود */}
                {formik.touched.titleTask && formik.errors.titleTask && (
                  <div className="error">{formik.errors.titleTask}</div>
                )}
              </div>
              {/* desc */}
              <div className="w-full flex flex-col justify-start items-center gap-2">
                <label htmlFor="descTodo" className="w-full text-sm">
                  {labelsByLang?.addNewDesc}
                </label>
                <textarea
                  id="descTodo"
                  className="w-full min-h-32 form-textarea rounded-md 
                    px-4 py-3 text-sm "
                  placeholder={labelsByLang?.addNewDesc}
                  name="descTask"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.descTask}
                />
                {/* نمایش خطا در صورت وجود */}
                {formik.touched.descTask && formik.errors.descTask && (
                  <div className="error">{formik.errors.descTask}</div>
                )}
              </div>
              {/* submit */}
              <div
                className="flex flex-row flex-wrap gap-4 mt-4
              justify-between items-center"
              >
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border 
                    border-transparent bg-green-100 px-4 py-2 text-sm 
                    font-medium text-green-900 hover:bg-green-200 
                    focus:outline-none focus-visible:ring-2 
                    focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  disabled={!formik.isValid}
                >
                  {labelsByLang?.addNewButton}
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border 
                    border-transparent bg-red-100 px-4 py-2 text-sm 
                    font-medium text-red-700 hover:bg-red-200 
                    focus:outline-none focus-visible:ring-2 
                    focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => handleNavigate()}
                >
                  {labelsByLang?.cancelButton}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditTask;
