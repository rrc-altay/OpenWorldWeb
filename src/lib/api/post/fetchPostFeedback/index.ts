import axiosProject from "@/lib/http";
import { FeedbackFormModel } from "@/lib/models/Forms/FeedbackFormModel";

export const fetchPostFeedback = async (
  data: Omit<FeedbackFormModel, "agree">,
) => {
  return await axiosProject.post("/feedback/", data);
};
