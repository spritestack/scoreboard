"use client";

import { useMemo, useState } from "react";
import { SportButton } from "./SportButton";
import { Result, Sport } from "./../app/lib/types";

export default function ResultsTable({ data }: { data: Result[] }) {
  const [sport, setSport] = useState(Sport.bike);

  const results = useMemo(() => {
    return data.filter((r) => r.category === sport)
      .sort((a, b) => a.time - b.time); // sort by time ascending
  }, [data, sport]);

  function formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hundredths = Math.floor((ms % 1000) / 10);

    return `${minutes}:${seconds.toString().padStart(2, "0")}.${hundredths
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-hidden">
      <div className="grid grid-cols-3 gap-4 mb-4 font-mono">
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
      </div>

      <div className="flex-1 overflow-y-scroll">
        <table className="w-full">
          <tbody>
            {results.map((r) => (
              <tr className="border-b border-gray-700" key={r.id}>
                <td>{r.athlete}</td>
                <td className="text-right py-3">{formatTime(r.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}