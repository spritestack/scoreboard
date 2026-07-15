"use client"

import { useState } from "react";
import { Sport } from "./../app/lib/types";
import { SportButton } from "./SportButton";


export default function SportInput() {

  const [sport, setSport] = useState(Sport.bike);

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
    />

  </div>
}
