import React from "react";
import { DropdownIcon, Logo } from "../../assets/icons/icons";

function Navigation() {
  return (
    <>
      <div className="px-5">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <ul>
              <li className="flex gap-1 items-center">
                <div>Buy</div>
                <DropdownIcon />
              </li>
              <li className="flex gap-1 items-center">
                <div>Buy</div>
                <DropdownIcon />
              </li>
              <li className="flex gap-1 items-center">
                <div>Buy</div>
                <DropdownIcon />
              </li>
              <li className="flex gap-1 items-center">
                <div>Buy</div>
                <DropdownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
