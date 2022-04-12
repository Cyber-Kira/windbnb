import React, { useContext } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { SearchPanelContext, SearchPanelInterface } from "../..";

interface Props {
  location?: string;
  numOfGuests?: number;
}

export const Search = ({ location, numOfGuests }: Props) => {
  const { setSearchPanelStatus } = useContext(
    SearchPanelContext
  ) as SearchPanelInterface;

  return (
    <div
      onClick={() => setSearchPanelStatus(true)}
      className="md:m-0 m-10 flex shadow-md hover:shadow cursor-pointer rounded-2xl select-none transition-shadow"
    >
      <div
        className={`flex flex-1 basis-auto justify-center items-center text-sm px-4 py-5 ${
          location ? "text-main" : "text-gray"
        } border-r border-light`}
      >
        {location ? location : "Add location"}
      </div>
      <div className="flex flex-1 basis-auto justify-center items-center text-sm px-4 py-5 text-gray border-r border-light">
        {numOfGuests ? numOfGuests : "Add"} guests
      </div>
      <div className="flex flex-inherit justify-center items-center px-4 py-5">
        <SearchRoundedIcon style={{ color: "#EB5757E5" }} />
      </div>
    </div>
  );
};
