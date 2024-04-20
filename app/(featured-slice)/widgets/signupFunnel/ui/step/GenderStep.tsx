import { StepProps } from "../../types";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MainButton } from "@/app/(featured-slice)/shared/Button/ui";
import { CustomRadio } from "@/app/(featured-slice)/shared/radio/ui/CustomRadio";
import { genderOptions } from "../../const/const";

type Gender = { gender: string };

export const GenderStep = ({ goNextStep, setState }: StepProps) => {
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    control,
  } = useForm<Gender>();

  const onSubmit: SubmitHandler<Gender> = ({ gender }) => {
    setState((data) => {
      return { ...data, gender: gender };
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.gender}>
        <FormLabel htmlFor="gender">성별을 입력해주세요.</FormLabel>
        <CustomRadio
          options={genderOptions}
          name={"gender"}
          control={control}
        />
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </FormControl>

      <MainButton
        type={"submit"}
        _disabled={{
          bgColor: "#D2D2D2",
          color: "#FFFFFF",
        }}
        isDisabled={!isValid}
      >
        다음
      </MainButton>
    </form>
  );
};
