import { FaCheck } from "react-icons/fa6";
import { TitleHeaders } from "../../helpers";
import { Tooltip } from "react-tooltip";
import { useStateContext } from "../../context/ContextProvider";
import { useEffect } from "react";

const HandleThemeColors = () => {
  const {
    themes,
    theme: themeState,
    setTheme: setThemeState,
    labelsByLang,
    langSelected,
  } = useStateContext();
  // console.log(themeState);

  useEffect(() => {}, [themeState, langSelected]);

  return (
    <>
      <TitleHeaders
        title={labelsByLang.themeSetting}
        className={"w-full mt-10 text-white"}
      />
      <div className="flex flex-row flex-wrap gap-4 w-full p-3 justify-center gap-y-7">
        {themes &&
          themes.map((th, index) => (
            <div key={index}>
              <button
                data-tooltip-id={th.label}
                data-tooltip-content={
                  langSelected.value === "per" ? th.label : th.labelEN
                }
                className="rounded-full w-10 h-10 block cursor-pointer
              hover:opacity-80 hover:scale-105"
                style={{
                  backgroundColor: `${th.bg}`,
                }}
                onClick={() => setThemeState(th)}
              >
                {themeState !== "" && themeState === th ? (
                  <FaCheck
                    size={28}
                    color={themeState === "#fff" ? "red" : "#fff"}
                    className="w-full text-center"
                  />
                ) : null}
              </button>
              <Tooltip
                id={th.label}
                opacity={1}
                style={{
                  backgroundColor: `${th.color}`,
                  color: `${th.bg}`,
                }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default HandleThemeColors;
