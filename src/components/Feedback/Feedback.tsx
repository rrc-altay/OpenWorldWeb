import React from "react";
import { aboutMock } from "@/lib/mock/aboutMock";
import { useFeedbackStyles } from "@/components/Feedback/Feedback.styles";
import { useFeedback } from "@/components/Feedback/useFeedback";
import { telephoneMask } from "@/lib/services/services";
import { TextAreaUI } from "@/UI/TextAreaUI/TextAreaUI";
import { TextFieldUI } from "@/UI/TextFieldUI/TextFieldUI";
import { CheckboxUI } from "@/UI/CheckboxUI/CheckboxUI";
import { CircularProgress } from "@mui/material";
import ModalUI from "@/UI/ModalUI/ModalUI";
import { feedbackMock } from "@/lib/mock/feedbackMock";
import { useBigTablet } from "@/hooks/useAdaptive";

const Feedback = () => {
  const {
    name,
    email,
    phone,
    message,
    agree,
    isLoading,
    isSuccess,
    hasError,
    setIsSuccess,
    onSubmit,
    handleChangeValue,
  } = useFeedback();

  const isBigTablet = useBigTablet();

  return (
    <ContainerSC>
      <ParagraphSC>{aboutMock.place}</ParagraphSC>
      <ParagraphSC>{aboutMock.phone.formatPhone}</ParagraphSC>
      <FormSC onSubmit={onSubmit}>
        <FormFieldsSC>
          <FormTopSC>
            <TextFieldContainerSC>
              <TextFieldUI
                name="name"
                type="text"
                inputMode="text"
                placeholder="Имя *"
                value={name.field.value}
                onChange={handleChangeValue(name)}
                error={!!name.fieldState.error}
                helperText={name.fieldState.error?.message || ""}
              />
            </TextFieldContainerSC>
            <TextFieldContainerSC>
              <TextFieldUI
                name="email"
                type="email"
                inputMode="email"
                placeholder="E-mail *"
                value={email.field.value}
                onChange={handleChangeValue(email)}
                error={!!email.fieldState.error}
                helperText={email.fieldState.error?.message || ""}
              />
            </TextFieldContainerSC>
            <TextFieldContainerSC>
              <TextFieldUI
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Телефон *"
                value={phone.field.value}
                onChange={handleChangeValue(phone, telephoneMask)}
                error={!!phone.fieldState.error}
                helperText={phone.fieldState.error?.message || ""}
              />
            </TextFieldContainerSC>
          </FormTopSC>
          <FormMiddleSC>
            <TextAreaUI
              maxRows={isBigTablet ? 6 : 7}
              multiline={true}
              placeholder="Ваше сообщение *"
              value={message.field.value}
              onChange={handleChangeValue(message)}
              error={!!message.fieldState.error}
              helperText={message.fieldState.error?.message || ""}
            />
          </FormMiddleSC>
        </FormFieldsSC>
        <FormBottomSC>
          <LabelSC
            checked={agree.field.value}
            onChange={() => agree.field.onChange(!agree.field.value)}
            control={<CheckboxUI defaultChecked />}
            label="Да, я даю согласие на обработку персональных данных"
          />
          <ButtonSC
            type="submit"
            disabled={!agree.field.value || isLoading}
            onClick={onSubmit}>
            {isLoading ? (
              <CircularProgress
                size={16}
                color="secondary"
              />
            ) : (
              "Отправить"
            )}
          </ButtonSC>
        </FormBottomSC>
      </FormSC>
      <ErrorSC>{hasError}</ErrorSC>
      <ModalUI
        open={isSuccess}
        handleClose={() => setIsSuccess(false)}>
        <ModalContentSC>{feedbackMock.success}</ModalContentSC>
      </ModalUI>
    </ContainerSC>
  );
};

const {
  ContainerSC,
  ParagraphSC,
  FormSC,
  FormFieldsSC,
  FormTopSC,
  FormMiddleSC,
  FormBottomSC,
  TextFieldContainerSC,
  LabelSC,
  ButtonSC,
  ErrorSC,
  ModalContentSC,
} = useFeedbackStyles();

export default React.memo(Feedback);
