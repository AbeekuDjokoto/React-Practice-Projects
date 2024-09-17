import React from "react";
import PropTypes from "prop-types";
import { HidePassword, ShowPassword } from "../../assets/icons/icons";
import BaseError from "./baseError";
import classNames from "classnames";

export const BaseInput = React.forwardRef(
  ({ type = "text", label, error, wrapper, suffix, prefix, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;
    return (
      <div>
        <div
          className={classNames(
            "flex items-center w-full border-2 border-[#4d4a4f] rounded-lg h-12 px-6 justify-between",
            wrapper
          )}
        >
          <p>{label}</p>
          <div className="w-full flex items-center focus:outline-none outline-none ">
            {prefix}
            <input
              ref={ref}
              type={inputType}
              style={{ outline: "none" }}
              className="w-full text-base border-none font-light disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none text-[#586667]"
              {...props}
            />
            {type === "password" && (
              <div
                onClick={handleTogglePassword}
                className="w-[24px] h-[24px] flex justify-center items-center input-image"
              >
                {showPassword ? <ShowPassword /> : <HidePassword />}
              </div>
            )}
            {suffix}
          </div>
          <BaseError error={error} />
        </div>
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
  wrapper: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  label: PropTypes.string,
};
