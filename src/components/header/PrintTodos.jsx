import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { GrDocumentCsv } from "react-icons/gr";
import { Tooltip } from "react-tooltip";

const PrintTodos = ({ labelsByLang, tasks }) => {
  const [csvData, setCsvData] = useState([]);

  // ? headers of table
  const headers = [
    { label: labelsByLang?.idTxt, key: "id" },
    { label: labelsByLang?.titleTxt, key: "title" },
    { label: labelsByLang?.descTxt, key: "desc" },
    { label: labelsByLang?.dateTimeTxt, key: "dateTime" },
    { label: labelsByLang?.completeTxt, key: "complete" },
  ];

  let content;
  useEffect(() => {
    // ? چون که با آپدیت شدن تسک های جدید، دیتای csv بروز نمیشد
    // ? از استیت استفاده کردیم تا داده جدید در هنگام تبدیل به اکسل یا .... نمایش داده بشه
    setCsvData(tasks);
  }, [tasks]);

  return (
    tasks && (
      <>
        <CSVLink
          key={tasks.length}
          data-tooltip-id="csvConverter"
          data-tooltip-content={labelsByLang?.printTodo}
          headers={headers}
          data={csvData}
          filename={"Todos.csv"}
          className="border-[2px] border-green-800 text-white
    hover:bg-green-800 transition-all p-3 text-[14px] rounded-full"
        >
          <GrDocumentCsv size={23} color="#fff" />
        </CSVLink>
        <Tooltip
          id="csvConverter"
          style={{ backgroundColor: "#fff", color: "#000" }}
        />
      </>
    )
  );
};
export default PrintTodos;
