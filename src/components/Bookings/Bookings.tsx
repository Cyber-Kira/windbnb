import React from "react";
import { Booking, BookingInteface } from "../Booking";

interface BookingsInterface {
  stays: BookingInteface[];
  filterString?: string;
}

export const Bookings = ({ stays, filterString = ".*" }: BookingsInterface) => {
  const regex = new RegExp(`\\b${filterString}\\b`, "i");
  const bookings = stays
    .filter((stay) => filterString && stay.city.match(regex))
    .map((stay) => {
      const { superHost, title, rating, type, beds, photo, city, country } =
        stay;

      return (
        <Booking
          key={title}
          city={city}
          country={country}
          superHost={superHost}
          title={title}
          rating={rating}
          type={type}
          beds={beds}
          photo={photo}
        />
      );
    });

  return (
    <div className="md:container mt-16 px-5 md:mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <p className="inline text-main font-main font-bold text-2xl leading-7">
          Stays in Finland
        </p>
        <span className="font-main text-textLighter text-sm leading-4">
          {bookings.length} stays
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {bookings}
      </div>
    </div>
  );
};
