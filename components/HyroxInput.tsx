"use client";

import { useId, useState } from "react";

export default function HyroxInput() {
  const [checked, setChecked] = useState<boolean>(false);
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-1 cursor-pointer select-none"
    >
      <input
        id={id}
        name="hyrox"
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          console.log(e.target.checked);
          setChecked(e.target.checked);
        }}
        className="sr-only peer"
      />

      <span className="block text-sm font-medium text-gray-300">
        During hyrox
      </span>

      <div className="
        h-5
        w-5
        rounded-sm
        border-1
        border-gray-500
        bg-background
        peer-checked:bg-white
        flex
        items-center
        justify-center
        transition-colors
      ">
        <svg
          className="h-5 w-5
          text-background"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M5 13l5 5L19 7" />
        </svg>
      </div>

    </label>
  );
}
