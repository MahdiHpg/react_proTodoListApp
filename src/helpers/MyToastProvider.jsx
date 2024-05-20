import { ToastContainer } from "react-toastify";
import { useStateContext } from "../context/ContextProvider";

const MyToastProvider = () => {
  const { rtlState } = useStateContext();

  return (
    <ToastContainer
      position={`${rtlState === "rtl" ? "bottom-right" : "bottom-left"}`}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={`${rtlState === "rtl" ? true : false}`}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition:Slide
    />
  );
};
export default MyToastProvider;
