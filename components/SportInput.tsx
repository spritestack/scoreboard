"use client"

import { useEffect, useState } from "react";
import { Sport, STORAGE_KEY } from "../app/lib/types";
import { SportButton } from "./SportButton";


export default function SportInput() {
  const [sport, setSport] = useState<Sport>(() => {
    if (typeof window === "undefined") return Sport.bike;

    const storedSport = localStorage.getItem(STORAGE_KEY);
    return storedSport ? (parseInt(storedSport) as Sport) : Sport.bike;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, sport.toString());
  }, [sport]);

  return <div className="grid grid-cols-3 gap-4">
    {Object.values(Sport)
      .filter((value) => typeof value === "number")
      .map((value) => {
        const sportName = Sport[value as number];
        return (
          <SportButton
            key={sportName}
            selected={sport === value}
            onClick={() => setSport(value as Sport)}
          >
            {sportName.toUpperCase()}
          </SportButton>
        );
      })}

    <input // hidden input for form submission
      type="hidden"
      name="sport"
      value={sport}
      required
    />

  </div>
}
