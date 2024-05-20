import { Dialog, Transition } from "@headlessui/react";
import { useStateContext } from "../../context/ContextProvider";
import { Fragment, useEffect, useState } from "react";
import { ButtonClose } from "../../helpers";
import { toast } from "react-toastify";
import FormModal from "./FormModal";

const ModalAddNewTask = () => {
  const { addNewTask, setAddNewTask, tasks, setTasks, labelsByLang } =
    useStateContext();
  const [titleTask, setTitleTask] = useState("");
  const [descTask, setDescTask] = useState("");

  // const canSave = [titleTask, descTask].every(Boolean);

  // const onChangeTitleTask = (e) => setTitleTask(e.target.value);
  // const onChangeDescTask = (e) => setDescTask(e.target.value);

  // ? modal close
  const closeModal = () => {
    setAddNewTask(false);
  };

  // ? submit new task
  const handleSubmit = (values) => {
    const newTask = {
      id: values.titleTask + " __ " + new Date().toISOString(),
      title: values.titleTask,
      desc: values.descTask,
      dateTime: new Date().toISOString(),
      complete: false,
    };
    setTasks([...tasks, newTask]);
    toast.success(labelsByLang?.addNewSuccess);

    closeModal();
  };

  return (
    <Transition appear show={addNewTask} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 text-right"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden 
              rounded-2xl bg-white p-6 text-right align-middle shadow-xl 
              transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="flex flex-row justify-between items-center gap-3
                  text-lg font-medium leading-6 mb-5 text-gray-900"
                >
                  {labelsByLang?.addNewTitle}
                  <ButtonClose setState={setAddNewTask} color={"#000"} />
                </Dialog.Title>
                {/* form */}
                <FormModal
                  handleSubmit={handleSubmit}
                  labelsByLang={labelsByLang}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ModalAddNewTask;
