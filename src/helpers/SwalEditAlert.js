import Swal from "sweetalert2";

const SwalEditAlert = (labelsByLang, setState, bc_tasks, handleNavigate) => {
  Swal.fire({
    title: `${labelsByLang?.editTitleSwal}`,
    text: `${labelsByLang?.editTextSwal}`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `${labelsByLang?.editConfirmBtnSwal}`,
    cancelButtonText: `${labelsByLang?.editCancelBtnSwal}`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${labelsByLang?.editConfirmedTitleSwal}`,
        text: `${labelsByLang?.editConfirmedTextSwal}`,
        icon: "success",
        confirmButtonText: `${labelsByLang?.editConfirmedOKSwal}`,
      });
      setState(bc_tasks);
      handleNavigate();
    }
  });
};

export default SwalEditAlert;
