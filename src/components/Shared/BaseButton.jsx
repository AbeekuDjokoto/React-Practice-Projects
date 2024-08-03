import PropTypes from "prop-types";
import ButtonLoader from "./ButtonLoader";

const BaseButton = ({ children, className, isLoading, ...props }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-[#7A229D] rounded-3xl text-white text-base ${className}`}
      {...props}
    >
      {isLoading ? <ButtonLoader /> : <>{children}</>}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default BaseButton;
