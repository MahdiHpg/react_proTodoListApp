import { Link } from "react-router-dom";

const SiteName = ({ labelsByLangAppName, langSelectedValue }) => {
  // console.log(labelsByLang);

  return (
    <Link
      to={"/"}
      className={`brandName xs-max:mx-auto ${
        langSelectedValue === "EN" ? "!text-[20px]" : "!text-[50px]"
      }`}
    >
      {labelsByLangAppName}
    </Link>
  );
};
export default SiteName;
