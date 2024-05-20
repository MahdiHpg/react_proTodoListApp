import { GoPlusCircle } from "react-icons/go";
import { useStateContext } from "../../context/ContextProvider";
import { TitleHeaders } from "../../helpers";
import { AiOutlineMinusCircle } from "react-icons/ai";

const SetPerPage = () => {
  const { perPage, setPerPage, labelsByLang } = useStateContext();

  const handleIncrease = () => {
    setPerPage((prev) => {
      if (prev < 15) {
        return prev + 1;
      } else return prev;
    });
  };
  const handleDecrease = () => {
    setPerPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else return prev;
    });
  };

  const handleChange = (e) => {
    let value = e.target.value.replace(/\s+/g, "");
    value = parseInt(e.target.value, 5);
    if (!isNaN(value)) {
      if (value < 1) {
        value = 1;
      } else if (value > 15) {
        value = 15;
      }
      setPerPage(value);
    }
  };

  return (
    <div className="w-full mt-10">
      {/* title */}
      <TitleHeaders
        className={"w-full text-white"}
        title={labelsByLang?.perPageTitle}
      />
      {/* edit font */}
      <div
        className="w-full flex flex-row flex-wrap gap-4
      justify-between items-center mt-5"
      >
        {/* increase */}
        <button
          className="hover:bg-green-500 hover:scale-110
          transition-all rounded-full"
          onClick={() => handleIncrease()}
        >
          <GoPlusCircle
            className="w-full text-center"
            size={40}
            color={"#fff"}
          />
        </button>
        {/* input */}
        <input
          className="form-input w-[80px] text-sm bg-transparent
          [appearance:textfield] text-center p-3
          [&::-webkit-outer-spin-button]:appearance-none 
          [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          min={1}
          max={30}
          value={perPage}
          onChange={handleChange}
        />
        {/* decrease */}
        <button
          className="hover:bg-red-500 hover:scale-110
          transition-all rounded-full"
          onClick={() => handleDecrease()}
        >
          <AiOutlineMinusCircle
            className="w-full text-center"
            size={40}
            color={"#fff"}
          />
        </button>
      </div>
    </div>
  );
};
export default SetPerPage;
