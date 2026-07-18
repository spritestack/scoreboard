"use client"

import React from "react";
import { formatTime, convertToMilliseconds } from "../app/lib/time";

// TODO
// - Do we want to store rawTime in DB?

export default function TimeInput() {

  const [rawTime, setRawTime] = React.useState("");
  const [displayTime, setDisplayTime] = React.useState<string>("");

  const [millisecondsTime, setMillisecondsTime] = React.useState<number>(0);

  return <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "flex-end",
    justifyContent: "space-around"
  }}>
    <div style={{
      flex: 1
    }}>
      <label htmlFor="time" className="block text-sm font-medium text-gray-300">
        Time
      </label>
      <div className="mt-1 flex flex-row items-center gap-3">
        <input
          type="text"
          inputMode="numeric"
          id="time"
          autoComplete="off"
          required

          minLength={3}
          maxLength={6}

          className="flex-1 block w-full border border-gray-500 rounded-sm p-2"
          value={rawTime}
          onInput={(e) => {
            const value = e.currentTarget.value;
            const milli = convertToMilliseconds(value);
            setRawTime(value);
            setDisplayTime(formatTime(milli));
            setMillisecondsTime(milli);
          }}
        />
        <div className="text-gray-500">{"->"}</div>
        <div className="flex-2 text-xl text-white text-center">
          {displayTime}
        </div>
      </div>
    </div>

    <input // hidden input for form submission
      type="hidden"
      name="time"
      value={millisecondsTime}
    />

  </div>
}
