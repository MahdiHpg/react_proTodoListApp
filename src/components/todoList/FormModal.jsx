import { useFormik } from "formik";
import { validationSchema } from "../../validations/validationSchema";

const FormModal = ({ handleSubmit, labelsByLang }) => {
  const formik = useFormik({
    initialValues: {
      titleTask: "",
      descTask: "",
    },
    validationSchema: validationSchema(labelsByLang),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
            className="w-full min-h-14 form-textarea rounded-md 
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
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border 
                    border-transparent bg-green-100 px-4 py-2 mt-4 text-sm 
                    font-medium text-green-900 hover:bg-green-200 
                    focus:outline-none focus-visible:ring-2 
                    focus-visible:ring-green-500 focus-visible:ring-offset-2"
          disabled={!formik.isValid}
        >
          {labelsByLang?.addNewButton}
        </button>
      </div>
    </form>
  );
};
export default FormModal;
