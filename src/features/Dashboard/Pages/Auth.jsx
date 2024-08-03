import { Controller, useForm } from "react-hook-form";
import { BaseInput } from "../../../components";
import PreLoader from "../../../components/Shared/PreLoader";
import { useUserData } from "../../../hooks";

const Auth = () => {
  const { data, isLoading } = useUserData();
  console.log(data);
  const { register, control } = useForm({
    defaultValues: {
      age: data?.age ? data?.age : "",
      fistName: data?.firstName ? data?.firstName : "",
    },
  });

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-[580px]">
          <PreLoader />
        </div>
      ) : (
        <div className="py-2 px-[38.875px] flex flex-col bg-[#f5f5f5] rounded-lg w-full">
          <div className="flex flex-col gap-2 pt-4 ">
            <p className="text-[30.4px] leading-11 font-bold">
              Profile Information
            </p>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div>
                  <p>First Name</p>
                  <Controller
                    render={({ field }) => (
                      <BaseInput
                        {...field}
                        {...register("firstName")}
                        disabled
                      />
                    )}
                    control={control}
                    name={"firstName"}
                  />
                </div>
                <div>
                  <p>Last Name</p>
                  <Controller
                    render={({ field }) => (
                      <BaseInput {...field} {...register("age")} disabled />
                    )}
                    control={control}
                    name={"age"}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Age</p>
                  <Controller
                    render={({ field }) => (
                      <BaseInput {...field} {...register("age")} disabled />
                    )}
                    control={control}
                    name={"age"}
                  />
                </div>
                <div>
                  <p>Account Balance</p>
                  <Controller
                    render={({ field }) => (
                      <BaseInput {...field} {...register("age")} disabled />
                    )}
                    control={control}
                    name={"age"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
