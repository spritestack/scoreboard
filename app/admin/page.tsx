import SportInput from "../../components/SportInput";
import TimeInput from "../../components/TimeInput";
import { addResult } from "../admin/actions";
import Link from "next/link";

// TODO
// - Add message to confirm data sent to database or failed!

export default function AdminPage() {

  return (
    <main className="h-screen flex flex-col p-6">

      <div className="flex flex-row justify-between items-center mb-4 font-sans">
        <h1 className="text-3xl font-bold">
          Add
        </h1>
        <Link href="/" className="text-3xl font-bold rotate-45">+</Link>
      </div>

      <form action={addResult} className="space-y-4">

        <SportInput />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 w-full border border-gray-500 rounded-sm p-2"
          />
        </div>

        <TimeInput />

        <div>
          <label htmlFor="race_date" className="block text-sm font-medium text-gray-300">
            Race Date
          </label>
          <input
            type="date"
            name="race_date"
            id="race_date"
            className="mt-1 border border-gray-500 rounded-sm p-2"
            style={{ width: "100%" }}
            defaultValue={new Date().toISOString().split("T")[0]} // default to today
          />
        </div>
        <button
          type="submit"
          className="border w-full mt-6 p-2 text-orange-500 border-orange-500 rounded-sm"
        >
          Add Result
        </button>
      </form >
    </main >
  );
}
