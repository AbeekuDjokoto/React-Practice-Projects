// import { Controller } from "react-hook-form";
// import { BaseInput } from "../../../../components";

import { Controller } from "react-hook-form";
import { useUserData } from "../../../../hooks";
import { BaseInput } from "../../../../components";

const ProfileSettingsForm = (data) => {
  const {
    age,
    firstName,
    lastName,
    email,
    gender,
    maidenName,
    address,
    company,
  } = data.data;
  console.log(data);
  const { register, control } = useUserData();

  return (
    <div className="">
      <div className="flex flex-col justify-between py-6 border border-b-[#d1d7dc] border-l-[#d1d7dc] border-r-[#d1d7dc]">
        {/* Basics */}
        <div className="mx-auto w-[90%] lg:w-[69%] flex flex-col gap-4">
          <p>Basics:</p>
          <Controller
            defaultValue={firstName}
            render={({ field }) => <BaseInput {...field} disabled />}
            control={control}
            name={"firstName"}
          />
          <Controller
            defaultValue={maidenName}
            render={({ field }) => (
              <BaseInput {...field} {...register("maidenName")} disabled />
            )}
            control={control}
            name={"maidenName"}
          />
          <Controller
            defaultValue={lastName}
            render={({ field }) => (
              <BaseInput {...field} {...register("lastName")} disabled />
            )}
            control={control}
            name={"lastName"}
          />
          <Controller
            defaultValue={email}
            render={({ field }) => (
              <BaseInput {...field} {...register("email")} disabled />
            )}
            control={control}
            name={"email"}
          />
          <Controller
            defaultValue={gender}
            render={({ field }) => (
              <BaseInput {...field} {...register("gender")} disabled />
            )}
            control={control}
            name={"gender"}
          />
          <Controller
            defaultValue={age}
            render={({ field }) => (
              <BaseInput {...field} {...register("age")} disabled />
            )}
            control={control}
            name={"age"}
          />
        </div>

        <hr className="mt-8 mb-8 w-[90%] lg:w-[69%] mx-auto" />

        {/* address */}
        <div className="mx-auto w-[90%] lg:w-[69%] flex flex-col gap-4">
          <p>Address:</p>
          <Controller
            defaultValue={address?.address}
            render={({ field }) => <BaseInput {...field} disabled />}
            control={control}
            name={"address?.address"}
          />
          <Controller
            defaultValue={address?.city}
            render={({ field }) => (
              <BaseInput {...field} {...register("address?.city")} disabled />
            )}
            control={control}
            name={"address?.city"}
          />
          <Controller
            defaultValue={address?.country}
            render={({ field }) => (
              <BaseInput
                {...field}
                {...register("address?.country")}
                disabled
              />
            )}
            control={control}
            name={"address?.country"}
          />
          <Controller
            defaultValue={address?.state}
            render={({ field }) => (
              <BaseInput {...field} {...register("address?.state")} disabled />
            )}
            control={control}
            name={"address?.state"}
          />
        </div>

        <hr className="mt-8 mb-8 w-[90%] lg:w-[69%] mx-auto" />

        {/* company */}
        <div className="mx-auto w-[90%] lg:w-[69%] flex flex-col gap-4">
          <p>Company:</p>
          <Controller
            defaultValue={company?.name}
            render={({ field }) => <BaseInput {...field} disabled />}
            control={control}
            name={"company?.name"}
          />
          <Controller
            defaultValue={company?.department}
            render={({ field }) => (
              <BaseInput
                {...field}
                {...register("company?.department")}
                disabled
              />
            )}
            control={control}
            name={"company?.department"}
          />
          <Controller
            defaultValue={company?.title}
            render={({ field }) => (
              <BaseInput {...field} {...register("company?.title")} disabled />
            )}
            control={control}
            name={"company?.title"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsForm;
