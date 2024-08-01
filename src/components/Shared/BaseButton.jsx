import PropTypes from "prop-types";

const BaseButton = ({ children, className, ...props }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-[#7A229D] rounded-3xl text-white text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BaseButton;
