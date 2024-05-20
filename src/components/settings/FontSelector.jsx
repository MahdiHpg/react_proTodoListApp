import Select from "react-select";
import { useStateContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";

const FontSelector = ({
  wSize = "300px",
  minWSize = "300px",
  dataOptions,
  isRtl = true,
  isClearable = false,
  isSearchable = false,
  onChangeState,
}) => {
  const { fontFamily, fonts, setFontFamily, labelsByLang, rtlState } =
    useStateContext();
  const [selectedFont, setSelectedFont] = useState(fontFamily);
  // console.log(defaultVal);

  const handleRTLfonts = () => {
    setFontFamily(fonts[0]);
    setSelectedFont(fonts[0]);
  };
  const handleLTRfonts = () => {
    setFontFamily(fonts[0]);
    setSelectedFont(fonts[0]);
  };

  useEffect(() => {
    rtlState === "rtl" ? setFontFamily(fonts[0]) : setFontFamily(fonts[0]);
  }, [rtlState]);

  useEffect(() => {
    setSelectedFont(fontFamily);
    // console.log(fontFamily);
  }, [fontFamily]);

  const handleOnChange = (selectedOption) => {
    setSelectedFont(selectedOption);
    setFontFamily(selectedOption);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      color: state.isSelected ? "green" : "black",
      "&:hover": {
        background: "lightgray",
        color: "red",
      },
    }),
  };

  return (
    <div className="w-full">
      <label htmlFor="mySelect" className="my-5 w-full block text-white">
        {labelsByLang.fontSelectSetting}
      </label>
      <Select
        id="mySelect"
        className="w-full"
        classNamePrefix="select"
        value={selectedFont}
        options={fonts}
        isRtl={isRtl}
        isClearable={isClearable}
        isSearchable={isSearchable}
        onChange={handleOnChange}
        hideSelectedOptions={fontFamily}
        styles={customStyles}
      />
    </div>
  );
};
export default FontSelector;
