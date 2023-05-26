import { useController, UseControllerReturn, useForm } from "react-hook-form";
import { FeedbackFormModel } from "@/lib/models/Forms/FeedbackFormModel";
import { fetchPostFeedback } from "@/lib/api/post/fetchPostFeedback";
import { ChangeEvent, useState } from "react";
import { isAxiosError } from "axios";
import { feedback } from "@/lib/mock/feedback";

export const useFeedback = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<string>("");

  const { control, reset, formState, setError, handleSubmit } =
    useForm<FeedbackFormModel>({
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
        agree: true,
      },
    });

  const name = useController({
    control,
    name: "name",
    rules: {
      required: true,
      maxLength: { value: 30, message: "Макс. длинна 30" },
    },
  });

  const email = useController({
    control,
    name: "email",
    rules: {
      required: true,
      pattern: {
        value: new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        message: "Ошибка валидации",
      },
      maxLength: { value: 50, message: "Макс. длинна 100" },
    },
  });

  const phone = useController({
    control,
    name: "phone",
    rules: {
      required: true,
      maxLength: { value: 25, message: "Макс. длинна 25" },
    },
  });

  const message = useController({
    control,
    name: "message",
    rules: {
      required: true,
      maxLength: { value: 1024, message: "Макс. длинна 1024" },
    },
  });

  const agree = useController({
    control,
    name: "agree",
    rules: {
      required: true,
      validate: (value) => value === true,
    },
  });

  const handleChangeValue = (
    // eslint-disable-next-line
    controller: UseControllerReturn<FeedbackFormModel, any>,
    callback?: (value: string) => string,
  ) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (hasError) {
        setHasError("");
      }

      let value = e.target.value;

      if (callback) {
        value = callback(value);
      }

      controller.field.onChange(value);
    };
  };

  const onSubmit = handleSubmit(({ agree, ...sendData }) => {
    // console.log(data.)
    if (!agree) {
      setHasError("Подтвердите согласие на обработку персональных данных");
      return;
    }

    setIsLoading(true);

    fetchPostFeedback(sendData)
      .then(() => {
        setIsSuccess(true);
        setHasError("");
        reset(formState.defaultValues);
      })
      .catch((e) => {
        if (isAxiosError(e)) {
          const errorData = e.response?.data;
          reset(formState.defaultValues);

          //? Error validate data
          if (typeof errorData === "object") {
            const errorValidateObj = errorData as {
              [key in keyof FeedbackFormModel]: [string];
            };

            for (const [key, value] of Object.entries(errorValidateObj)) {
              setError(key as keyof FeedbackFormModel, {
                message: value[0],
                type: "value",
              });
            }
          }

          //? Error SMT Send
          if (errorData === false) {
            setHasError(feedback.reject);
            return;
          }
        } else {
          setHasError(feedback.reject);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return {
    name,
    email,
    phone,
    message,
    agree,
    hasError,
    isLoading,
    isSuccess,
    setIsSuccess,
    onSubmit,
    handleChangeValue,
  };
};
