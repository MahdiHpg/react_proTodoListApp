import { createContext, useContext, useEffect, useState } from "react";
import { fontArrays, englishFontArrays } from "../assets/data/fontData";
import { colorArrays2, themesArrays } from "../assets/data/colorData";
import {
  langsArrays,
  langPerArrays,
  langEnArrays,
} from "../assets/data/langData";

const stateContext = createContext();

const getLS = (nameLS) => {
  const checkExist = localStorage.getItem(nameLS);
  switch (nameLS) {
    case "LangTodo":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return langsArrays[0];

    case "fontTodo":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return fontArrays[0];

    case "colorTodo":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return colorArrays2[0];

    case "themeTodo":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return "";

    case "tasks":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return [];

    case "fontSizeTodo":
      if (checkExist) {
        return JSON.parse(checkExist);
      } else return "14px";

    default:
      break;
  }
};

export const ContextProvider = ({ children }) => {
  // ? change language
  const [langSelected, setLangSelected] = useState(getLS("LangTodo"));
  const [langs, setLangs] = useState(langsArrays);
  const [labelsByLang, setLabelsByLang] = useState([]);
  // console.log(langSelected);

  // ? fonts
  const [fontFamily, setFontFamily] = useState(getLS("fontTodo"));
  const [fonts, setFonts] = useState(fontArrays);

  // ? colors
  const [color, setColor] = useState(getLS("colorTodo"));
  const [colors, setColors] = useState(colorArrays2);
  // console.log(color);

  // ? themes
  const [theme, setTheme] = useState(getLS("themeTodo"));
  const [themes, setThemes] = useState(themesArrays);

  // ? font size
  const [fontSize, setFontSize] = useState(getLS("fontSizeTodo"));

  // set diraction
  const [rtlState, setRtlState] = useState("rtl");
  // console.log(fontFamily.value);

  // ? tasks
  const [addNewTask, setAddNewTask] = useState(false);
  const [tasks, setTasks] = useState(getLS("tasks"));

  // ? per page size
  const [perPage, setPerPage] = useState(5);
  // console.log(
  //   "perPage is : " + perPage + " typeof perPage is : " + typeof perPage
  // );

  // ! set to localStorage
  useEffect(() => {
    // Todo: set language
    langSelected &&
      localStorage.setItem("LangTodo", JSON.stringify(langSelected));
    // Todo:  set rtl
    if (langSelected.value === "per") {
      // Todo:  set rtl
      setRtlState("rtl");

      // Todo:  فراخوانی آرایه فارسی
      setLabelsByLang(langPerArrays);

      // Todo: fontFamily
      setFonts(fontArrays);
    } else {
      // Todo:  set rtl
      setRtlState("ltr");

      // Todo:  فراخوانی آرایه انگلیسی
      setLabelsByLang(langEnArrays);

      // Todo: fontFamily
      setFonts(englishFontArrays);
    }

    fontFamily && localStorage.setItem("fontTodo", JSON.stringify(fontFamily));
    // Todo:  set fonts family
    document.body.style.fontFamily = fontFamily.value;
    // ? toasify font family
    const toastifyFont = document.querySelector(".Toastify__toast");
    if (toastifyFont) {
      toastifyFont.style.fontFamily = fontFamily.value;
    }
    // document.documentElement.style.fontFamily = fontFamily.value;

    // Todo:  اگر رنگ انتخاب شده بود، تم خالی شود و برعکس
    if (color !== "") {
      localStorage.setItem("colorTodo", JSON.stringify(color));
      localStorage.setItem("themeTodo", JSON.stringify(""));
      setTheme("");

      //  Todo:  set fonts color
      document.body.style.color = color;
    }
    if (theme !== "") {
      localStorage.setItem("themeTodo", JSON.stringify(theme));
      localStorage.setItem("colorTodo", JSON.stringify(""));
      setColor("");

      //  Todo:  set colors
      document.body.style.color = theme.color;
      document.body.style.backgroundColor = theme.bg;
    }

    //  Todo:  add task to localStorage
    tasks && localStorage.setItem("tasks", JSON.stringify(tasks));

    //  Todo:  set font size
    fontSize && localStorage.setItem("fontSizeTodo", JSON.stringify(fontSize));
    document.body.style.fontSize = fontSize + "px";

    //  Todo:  set diraction
    document.documentElement.style.setProperty("direction", rtlState);
    //
  }, [
    rtlState,
    color,
    fontFamily,
    fonts,
    tasks,
    theme,
    fontSize,
    langSelected,
    perPage,
  ]);

  return (
    <stateContext.Provider
      value={{
        langSelected,
        setLangSelected,
        labelsByLang,
        setLabelsByLang,
        langs,
        setLangs,
        fontFamily,
        setFontFamily,
        fonts,
        setFonts,
        color,
        setColor,
        colors,
        setColors,
        theme,
        setTheme,
        themes,
        setThemes,
        fontSize,
        setFontSize,
        rtlState,
        setRtlState,
        addNewTask,
        setAddNewTask,
        tasks,
        setTasks,
        perPage,
        setPerPage,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
