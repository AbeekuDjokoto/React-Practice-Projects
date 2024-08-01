import React from "react";
import PropTypes from "prop-types";
import { HidePassword, ShowPassword } from "../../assets/icons/icons";
import BaseError from "./baseError";

export const BaseInput = React.forwardRef(
  ({ type = "text", error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;
    return (
      <div>
        <div className="grid grid-cols-[1fr_max-content] w-full border-2 border-[#4d4a4f] rounded-lg h-12 items-center px-6 justify-between">
          <div className="w-full">
            {props.icon && <div>{props.icon}</div>}
            <input
              ref={ref}
              type={inputType}
              className="w-full bg-transparent text-base font-light disabled:cursor-not-allowed disabled:opacity-50 outline-none text-[#586667]"
              {...props}
            />
          </div>
          <div className="flex items-center space-x-2">
            {type === "password" && (
              <div
                onClick={handleTogglePassword}
                className="w-[24px] h-[24px] flex justify-center items-center input-image"
              >
                {showPassword ? <ShowPassword /> : <HidePassword />}
              </div>
            )}
          </div>
        </div>
        <BaseError error={error} />
      </div>
    );
  }
);

BaseInput.displayName = "BaseInput";

BaseInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
};
