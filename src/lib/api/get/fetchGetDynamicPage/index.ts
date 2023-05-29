import axiosProject from "@/lib/http";

export const fetchGetDynamicPage = async (path: string) => {
  return await axiosProject.get(`/catalog/page/${path}/`);
};
