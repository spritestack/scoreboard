"use client";

import { useMemo, useState } from "react";
import { SportButton } from "./SportButton";
import { Result, Sport } from "./../app/lib/types";
import { formatTime } from "../app/lib/time";

// TODO
// - find duplicate names and exclude slower times
// - Animate in the results

export default function ResultsTable({ data }: { data: Result[] | null }) {
  const [sport, setSport] = useState(Sport.bike);

  const results = useMemo(() => {
    return (data ?? []).filter((r) => r.category === sport)
      .sort((a, b) => a.time - b.time); // sort by time ascending
  }, [data, sport]);

  return (
    <div className="flex flex-col flex-1 overflow-y-hidden">
      <div className="grid grid-cols-3 gap-4 mb-4">
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

      {results.length === 0 ? (
        <div className="text-gray-200 mt-4">
          No results for {Sport[sport].toUpperCase()}
        </div>
      ) :
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
      </div>}

    </div>
  );
}