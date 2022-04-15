import React from "react";

export const GuestsSelector = ({
  guestsValue,
  setGuestsValue,
  adultsValue,
  childrenValue,
  setAdultsValue,
  setChildrenValue,
}: {
  guestsValue: string;
  adultsValue: number;
  childrenValue: number;
  setGuestsValue: React.Dispatch<React.SetStateAction<string>>;
  setAdultsValue: React.Dispatch<React.SetStateAction<number>>;
  setChildrenValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const changeAdultsValue = (value: number) => {
    if (adultsValue + value < 0) {
      return;
    }
    setGuestsValue((adultsValue + childrenValue + value).toString());
    setAdultsValue(+guestsValue - childrenValue + value);
  };

  const changeChildrenValue = (value: number) => {
    if (childrenValue + value < 0) {
      return;
    }
    setGuestsValue((childrenValue + adultsValue + value).toString());
    setChildrenValue(+guestsValue - adultsValue + value);
  };

  return (
    <div className="flex flex-col gap-14 pl-5 py-4">
      <div>
        <p className="text-sm font-secondary font-bold">Adults</p>
        <p className="text-sm font-secondary font-normal">Ages 13 or above</p>
        <div className="flex gap-4 mt-3">
          <button
            onClick={() => changeAdultsValue(-1)}
            type="button"
            className="inline-flex justify-center items-center w-6 h-6 border rounded border-textLightest"
          >
            -
          </button>
          <span id="adults-counter">{adultsValue}</span>
          <button
            onClick={() => changeAdultsValue(1)}
            className="inline-flex justify-center items-center w-6 h-6 border rounded border-textLightest"
            type="button"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <p className="text-sm font-secondary font-bold">Adults</p>
        <p className="text-sm font-secondary font-normal">Ages 13 or above</p>
        <div className="flex gap-4 mt-3">
          <button
            onClick={() => changeChildrenValue(-1)}
            type="button"
            className="inline-flex justify-center items-center w-6 h-6 border rounded border-textLightest"
          >
            -
          </button>
          <span id="adults-counter">{childrenValue}</span>
          <button
            onClick={() => changeChildrenValue(1)}
            className="inline-flex justify-center items-center w-6 h-6 border rounded border-textLightest"
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
