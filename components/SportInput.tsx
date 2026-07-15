"use client"

import { useState } from "react";

enum Sport {
  bike = 0,
  row = 1,
  ski = 2,
}

const sports = [
  { id: Sport.bike, label: "🚴 Bike" },
  { id: Sport.row, label: "🚣 Row" },
  { id: Sport.ski, label: "⛷️ Ski" },
];

export default function SportInput() {

  const [sport, setSport] = useState(Sport.bike);

  return <div className="grid grid-cols-3 gap-2">
    {sports.map((s) => (
      <button
        key={s.id}
        type="button"
        onClick={() => setSport(s.id)}
        className={`
        rounded-lg
        py-4
        text-lg
        font-semibold
        transition
        ${sport === s.id
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
      `}
      >
        {s.label}
      </button>
    ))}

    <input // hidden input for form submission
      type="hidden"
      name="sport"
      value={sport}
    />

  </div>
}
