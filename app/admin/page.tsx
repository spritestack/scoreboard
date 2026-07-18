import SportInput from "../../components/SportInput";
import TimeInput from "../../components/TimeInput";
import WhiteCheckbox from "../../components/WhiteCheckbox";
import { addResult } from "../admin/actions";
import Link from "next/link";

// TODO
// - Add an update page to edit a result
// - Validate form inputs before submission (gray out submit button until valid)
// - Remember last selected sport and preselect it when adding new result
// - Add message to confirm data sent to database or failed!

export default function AdminPage() {

  return (
    <main className="h-dvh flex flex-col overflow-hidden p-6">

      <div className="flex flex-row justify-between items-center mb-4 font-sans">
        <h1 className="text-3xl font-bold">
          Add
        </h1>
        <Link href="/" className="text-3xl font-bold rotate-45 mr-2">+</Link>
      </div>

      <form action={addResult} className="space-y-4">

        <SportInput />

        <div className="mt-7">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 w-full border border-gray-500 rounded-sm p-2"
            required
          />
        </div>

        <TimeInput />

        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="race_date" className="block text-sm font-medium text-gray-300">
              Race day
            </label>
            <input
              type="date"
              name="race_date"
              id="race_date"
              className="mt-1 border border-gray-500 rounded-sm p-2"
              defaultValue={new Date().toISOString().split("T")[0]} // default to today
            />

          </div>
          <div>
            <label htmlFor="hyrox" className="block text-sm font-medium text-gray-300">
              During hyrox
            </label>
            <input
              type="checkbox"
              name="hyrox"
              id="hyrox"
              defaultChecked={false}
              className="h-5 w-5 rounded mt-1 accent-white"
            />
          </div>

          <WhiteCheckbox>
            During hyrox
          </WhiteCheckbox>

        </div>



        <button
          type="submit"
          className="border w-full mt-10 p-2 text-orange-500 border-orange-500 rounded-sm"
          disabled={false} // TODO: disable until form is valid
        >
          Add Result
        </button>
      </form >
    </main >
  );
}
