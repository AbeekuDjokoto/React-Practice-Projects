import PropTypes from "prop-types";

export const Button = ({ ...props }) => {
  return (
    <>
      <div>
        <button type="submit">{props.btnText}</button>
      </div>
    </>
  );
};

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
