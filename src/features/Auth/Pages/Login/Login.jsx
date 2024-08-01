import { useForm } from "react-hook-form";

import { BaseInput } from "../../../../components";
import BaseButton from "../../../../components/Shared/BaseButton";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../../../../hooks";
import { loginFormSchema } from "../../../../types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: "onSubmit",
  });
  const { mutate } = useLogin();
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="max-w-[385px] w-full text-center py-8 flex flex-col gap-6 mx-auto">
      <p className="text-[25px] leading-9 font-bold text-[#211e22]">
        Enter your username and password to sign
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <BaseInput
          {...register("username")}
          placeholder="Enter your username"
          error={errors.username?.message}
          type="text"
        />
        <BaseInput
          {...register("password")}
          placeholder="enter your password"
          type="password"
          error={errors.password?.message}
        />
        <BaseButton className="h-12 leading-6">Continue</BaseButton>
      </form>
    </div>
  );
};

export default Login;
