import { SlClose } from "react-icons/sl";

const ButtonClose = ({ setState, size = "28px", color = "#fff" }) => {
  return (
    <button onClick={() => setState(false)}>
      <SlClose
        className="hover:bg-red-700 transition-all duration-300 rounded-full"
        size={size}
        color={color}
      />
    </button>
  );
};
export default ButtonClose;
