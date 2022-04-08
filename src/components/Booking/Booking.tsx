import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export interface BookingInteface {
  city: string;
  country: string;
  superHost?: boolean;
  title: string;
  rating?: number;
  maxGuests?: number;
  type: string;
  beds: number | null;
  photo?: string;
}

const superHostElement = (
  <div className="font-main leading-3 whitespace-nowrap inline-block font-semibold border-2 border-textLighter px-2 py-1 rounded-full uppercase text-xs text-textLighter">
    Super host
  </div>
);

export const Booking = ({
  superHost,
  title,
  rating,
  type,
  beds,
  photo,
}: BookingInteface) => {
  return (
    <div className="cursor-pointer">
      <img
        className="rounded-2xl object-cover w-full h-60"
        src={photo}
        alt={title}
      />
      <div className="flex items-center gap-2 mt-3">
        {superHost ? superHostElement : null}
        <p className="inline text-sm font-main text-textLightest">
          {type} {beds ? `. ${beds} beds` : null}
        </p>
        <p className="inline-flex text-sm items-center ml-auto">
          <StarRoundedIcon fontSize="small" sx={{ color: "#EB5757B8" }} />{" "}
          <span className="text-textLighter font-main ml-1">{rating}</span>
        </p>
      </div>
      <p className="text-main text-sm leading-4 font-semibold font-main mt-4">
        {title}
      </p>
    </div>
  );
};
