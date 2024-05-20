import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const UseTooltip = ({
  Icon,
  name,
  title,
  size = "28px",
  setState,
  state,
  bgColor,
  color,
  className,
  Tag,
  linkPath,
}) => {
  return (
    <>
      {linkPath ? (
        <Link
          data-tooltip-id={name}
          data-tooltip-content={title}
          data-tooltip-delay-hide={100}
          className={`${className}`}
          to={linkPath}
        >
          {Icon && <Icon size={size} color="#fff" />}
        </Link>
      ) : (
        <Tag
          data-tooltip-id={name}
          data-tooltip-content={title}
          data-tooltip-delay-hide={100}
          className={`${className}`}
          onClick={setState ?? setState}
          disabled={state ?? state}
        >
          {Icon && <Icon size={size} color="#fff" />}
        </Tag>
      )}

      <Tooltip
        id={name}
        events={["hover"]}
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      />
    </>
  );
};
export default UseTooltip;
