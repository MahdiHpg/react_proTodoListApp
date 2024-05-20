import * as yup from "yup";

export const validationSchema = (labelsByLang) => {
  return yup.object({
    titleTask: yup
      .string()
      .required(labelsByLang.addNewSubjectMsg)
      .min(2, labelsByLang.addNewSubjectMinMsg)
      .max(20, labelsByLang.addNewSubjectMaxMsg),
    descTask: yup
      .string()
      .required(labelsByLang.addNewDesctMsg)
      .min(5, labelsByLang.addNewDescError),
  });
};
