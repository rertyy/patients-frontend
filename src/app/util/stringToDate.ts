import { format } from "date-fns";

const stringToDate = (str: string) => {
  // converts dd-mm-yyyy to Date object
  const from = str.split("-");
  const date = new Date(Number(from[2]), Number(from[1]) - 1, Number(from[0]));
  return date;
};

export default stringToDate;
