import axiosProject from "@/lib/http";
import { TableModelArr } from "@/lib/models/TableModel";

export const fetchGetTableWorkTime = async () => {
  return await axiosProject.get<TableModelArr>("/table/worktime/");
};
