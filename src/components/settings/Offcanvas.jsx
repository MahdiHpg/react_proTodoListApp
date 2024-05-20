import { useRef } from "react";
import { TitleHeaders, ButtonClose, useClickOutside } from "../../helpers/";
import FontSelector from "./FontSelector";
import BtnColors from "./BtnColors";
import HandleThemeColors from "./HandleThemeColors";
import EditFontSize from "./EditFontSize";
import SetPerPage from "./SetPerPage";

const Offcanvas = ({ offcanvas, setOffcanvas, labelsByLang, rtlState }) => {
  const offCanvasRef = useRef();
  // console.log(offCanvasRef.current);

  useClickOutside(offCanvasRef, () => {
    setOffcanvas(false);
  });

  return (
    <div
      ref={offCanvasRef}
      className={`myOffcanvas sm:w-[450px] sm-max:w-full h-[100vh] bg-gray-700 
          ${offcanvas === false ? "hide" : "show"} overflow-y-auto
                fixed ${rtlState === "rtl" ? "rtlMode" : "ltrMode"} 
                top-0 z-50 overflow-hidden p-4 pt-5
                flex flex-col justify-start items-center`}
    >
      {/* myOffcanvas header */}
      <div
        className="myOffcanvas-header w-full flex flex-row 
            justify-between items-center"
      >
        {/* title */}
        <TitleHeaders
          title={labelsByLang.settingTooltip}
          className={"text-slate-300 text-xl"}
        />

        {/* btn close */}
        <ButtonClose setState={setOffcanvas} />
      </div>
      {/* myOffcanvas body */}
      <div className="flex flex-col justify-start items-center gap-7 my-10">
        {/* font selector */}
        <FontSelector labelTitle={labelsByLang.fontSelectSetting} />
        {/* btn colors */}
        <BtnColors />
        {/* btn themes */}
        <HandleThemeColors />
        {/* edit font size */}
        <EditFontSize />
        {/* edit per page */}
        <SetPerPage />
      </div>
    </div>
  );
};
export default Offcanvas;
