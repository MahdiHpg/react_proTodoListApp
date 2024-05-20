import SiteName from "./SiteName";
import Setting from "../settings/Setting";
import LanguageSelector from "./LanguageSelector";
import { useStateContext } from "../../context/ContextProvider";
import PrintTodos from "./PrintTodos";

const Header = () => {
  const { labelsByLang, langSelected, tasks, rtlState } = useStateContext();

  return (
    <header
      className={`w-full p-3 px-8 flex flex-row gap-3 flex-wrap
    justify-between items-center shadow-md border-b-[1px]
     border-cyan-600 bg-indigo-900 
     ${rtlState === "rtl" ? "dirRTL" : "dirLTR"}`}
    >
      {/* site name */}
      <SiteName
        langSelectedValue={langSelected?.value}
        labelsByLangAppName={labelsByLang?.appName}
      />
      {/* select language */}
      <LanguageSelector />
      <div
        className="flex flex-row flex-nowrap gap-3 items-center
      justify-between sm-max:mt-4 sm-max:justify-center sm-max:w-full"
      >
        {/* Print Todos */}
        {labelsByLang?.printTodo && (
          <PrintTodos labelsByLang={labelsByLang} tasks={tasks} />
        )}
        {/* setting */}
        <Setting />
      </div>
    </header>
  );
};
export default Header;
