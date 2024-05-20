import { Tooltip } from "react-tooltip";
import { useStateContext } from "../../context/ContextProvider";
import { TitleHeaders } from "../../helpers";
import { FaCheck } from "react-icons/fa6";
import { useEffect } from "react";

const BtnColors = () => {
  const {
    colors,
    color: colorState,
    setColor: setColorState,
    labelsByLang,
    langSelected,
    themeState,
  } = useStateContext();
  // console.log("colorState : " + colorState);

  useEffect(() => {}, [themeState, langSelected]);

  return (
    <>
      <TitleHeaders
        title={labelsByLang.colorSetting}
        className={"w-full mt-10 text-white"}
      />
      <div className="flex flex-row flex-wrap gap-4 w-full p-3 justify-center gap-y-7">
        {colors &&
          colors.map((color, index) => (
            <div key={index}>
              <button
                data-tooltip-id={color.name}
                data-tooltip-content={
                  langSelected.value === "per" ? color.label : color.labelEN
                }
                className="rounded-full w-10 h-10 block cursor-pointer
              hover:opacity-80 hover:scale-105"
                style={{
                  backgroundColor: `${color.value}`,
                }}
                onClick={() => setColorState(color.value)}
              >
                {colorState !== "" && colorState === color.value ? (
                  <FaCheck
                    size={28}
                    color={colorState === "#fff" ? "red" : "#fff"}
                    className="w-full text-center"
                  />
                ) : null}
              </button>
              <Tooltip
                id={color.name}
                opacity={1}
                style={{
                  backgroundColor: `${color.value}`,
                  color: `${color.bg}`,
                }}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default BtnColors;
