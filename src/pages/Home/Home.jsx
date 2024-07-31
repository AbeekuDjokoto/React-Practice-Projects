import React from "react";
import { BaseInput, Button } from "../../components/baseInput";

import { useForm } from "react-hook-form";
import { USER_REGISTRATION } from "../../hooks";
import { useUserData } from "../../hooks/useUser";

export const Home = () => {
  const { register, handleSubmit } = useForm();
  const { mutate } = USER_REGISTRATION();
  const onSubmit = (data) => {
    mutate(data);
  };

  //   const { data } = GET_ALL_MEALS();
  //   console.log("data", data);

  const { data } = useUserData();
  console.log("authenticated user", data);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            {...register("username")}
            placeholder="Enter your email"
            type="text"
          />
          <BaseInput
            {...register("password")}
            placeholder="enter your password"
            type="password"
          />
          <Button btnText={"Submit"} />
        </form>
      </div>
    </React.Fragment>
  );
};
