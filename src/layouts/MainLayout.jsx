import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import AddNewTask from "../components/todoList/AddNewTask";
import ModalAddNewTask from "../components/todoList/ModalAddNewTask";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const MainLayout = () => {
  const location = useLocation();
  const { rtlState } = useStateContext();

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <>
      {/* navbar */}
      <Header />

      {/* route changes */}
      <div
        className={`w-full h-full block 
      ${rtlState === "rtl" ? "dirRTL" : "dirLTR"}`}
      >
        <Outlet />
      </div>

      {/* add new task - modal */}
      {location.pathname === "/" && <AddNewTask />}
      <ModalAddNewTask />
    </>
  );
};
export default MainLayout;
