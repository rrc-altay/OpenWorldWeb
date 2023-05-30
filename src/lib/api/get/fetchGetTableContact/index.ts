import axiosProject from "@/lib/http";
import { TableModelArr } from "@/lib/models/TableModel";

export const fetchGetTableContact = async () => {
  return await axiosProject.get<TableModelArr>("/table/contacts/");
};
