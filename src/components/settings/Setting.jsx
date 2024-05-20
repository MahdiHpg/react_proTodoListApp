import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import Offcanvas from "./Offcanvas";
import UseTooltip from "../../helpers/UseTooltip";
import { useStateContext } from "../../context/ContextProvider";

const Setting = () => {
  const [offcanvas, setOffcanvas] = useState(false);
  const { labelsByLang, rtlState } = useStateContext();

  return (
    <>
      {/* btn setting */}
      <UseTooltip
        Tag={"button"}
        className={
          "rounded-full border-2 border-cyan-800 p-2 hover:bg-green-800 transition-all duration-300"
        }
        Icon={GiSettingsKnobs}
        name={"settingBtn"}
        title={labelsByLang.settingTooltip}
        state={offcanvas}
        setState={() => setOffcanvas(true)}
        bgColor={"#fff"}
        color={"#000"}
      />
      {/* offcanvas */}
      <Offcanvas
        offcanvas={offcanvas}
        setOffcanvas={setOffcanvas}
        labelsByLang={labelsByLang}
        rtlState={rtlState}
      />
    </>
  );
};
export default Setting;
