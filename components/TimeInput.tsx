"use client"

import React from "react";

export default function TimeInput() {

  // TODO
  // - limit input to 6 characters
  // - time validation
  // - convert time to milliseconds for storage in database

  const [rawTime, setRawTime] = React.useState("");
  const [time, setTime] = React.useState<string>("");

  // const [millisecondsTime, setMillisecondsTime] = React.useState<string>("");

  function convertTime(str: string): string {
    const digits = str.replace(/\D/g, "");

    // How do we handle invalid numbers? eg. 189 

    if (digits.length <= 2) return digits;
    if (digits.length <= 4)
      return `${digits.slice(0, -2)}:${digits.slice(-2)}`;

    return `${digits.slice(0, -4)}:${digits.slice(-4, -2)}:${digits.slice(-2)}`;
  }

  return <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "flex-end",
    justifyContent: "space-around"
  }}>
    <div style={{
      flex: 1
    }}>
      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
        Time
      </label>
      <input
        type="text"
        inputMode="numeric"
        id="time"
        autoComplete="off"

        minLength={3}
        maxLength={6}

        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        value={rawTime}
        onInput={(e) => {
          const value = e.currentTarget.value;
          setRawTime(value);
          setTime(convertTime(value));
        }}
      />
    </div>

    <div style={{
      flex: 1.5,
      textAlign: "center",
      fontSize: 25
    }}>
      {time}
    </div>


    <input // hidden input for form submission
      type="hidden"
      name="time"
      value={rawTime}
    />

  </div>
}
