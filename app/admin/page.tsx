import SportInput from "../../components/SportInput";
import TimeInput from "../../components/TimeInput";
import { addResult } from "../admin/actions";

// TODO
// - Add message to confirm data sent to database or failed!

export default function AdminPage() {

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Add Result
      </h1>

      <form action={addResult} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <TimeInput />

        <SportInput />

        <input
        type="date"
        name="race_date"
        id="race_date"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        defaultValue={new Date().toISOString().split("T")[0]} // default to today
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Result
        </button>
      </form >
    </main >
  );
}
