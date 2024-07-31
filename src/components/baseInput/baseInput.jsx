import React from "react";
import PropTypes from "prop-types";

export const BaseInput = React.forwardRef(
  ({ type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;
    return (
      <>
        <div>
          <div className="border border-red-500">
            {props.icon && <div>{props.icon}</div>}
            <input ref={ref} type={inputType} {...props} />
            {props.type === "password" && (
              <div onClick={handleTogglePassword}>
                {showPassword ? "hide password" : "show password"}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);

BaseInput.displayName = "BaseInput";

BaseInput.propTypes = {
  //   register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
};
