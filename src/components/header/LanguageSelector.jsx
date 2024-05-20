import Select from "react-select";
import { useStateContext } from "../../context/ContextProvider";

const LanguageSelector = () => {
  const { langSelected, setLangSelected, langs, rtlState } = useStateContext();
  // console.log(langs);

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

  const formatOptionLabel = ({ label, flag }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={flag}
        style={{ margin: "0 10px", width: "20px" }}
        // alt={`${label} flag`}
      />
      {label}
    </div>
  );

  return (
    <div className="w-[200px] xs-max:w-full">
      <Select
        defaultValue={langSelected}
        onChange={setLangSelected}
        className="w-full sm-max:w-[200px] mx-auto"
        classNamePrefix="select"
        options={langs}
        isRtl={rtlState === "rtl" ? `${true}` : `${false}`}
        isClearable={false}
        isSearchable={false}
        hideSelectedOptions={langSelected}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};
export default LanguageSelector;
