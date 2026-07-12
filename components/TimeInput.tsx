"use client"

import React from "react";

export default function TimeInput() {

  const [rawTime, setRawTime] = React.useState("");
  const [time, setTime] = React.useState<string>("");

  const [test, setTest] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTest(test => test + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function convertTime(str: string): string {
    if (str.length === 3) {
      return `${str[0]}:${str.slice(1)}`;
    } else if (str.length === 4) {
      return `${str.slice(0, 2)}:${str.slice(2)}`;
    } else if (str.length === 5) {
      return `${str[0]}:${str.slice(1, 3)}:${str.slice(3)}`;
    } else if (str.length === 6) {
      return `${str.slice(0, 2)}:${str.slice(2, 4)}:${str.slice(4)}`;
    }
    return str;
  }

  // alert("hello"); // pages fails to load/render

  return <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "flex-end",
    justifyContent: "space-around"
  }}>
    <div>
      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
        Time
      </label>
      <input
        type="text"
        // inputMode="numeric"
        name="time"
        id="time"
        autoComplete="off"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        value={rawTime}
        onChange={(e) => {
          // alert("change" + e.currentTarget.value);
        }}
        onInput={(e) => {
          // alert("input" + e.currentTarget.value);
          const value = e.currentTarget.value;
          setRawTime(value);
          setTime(convertTime(value));
        }}
      />
    </div>
    
    <div>
      {test}
    </div>

    <div style={{
      flex: 1,
      textAlign: "center",
      fontSize: 25
    }}>
      {time}
    </div>
  </div>
}
