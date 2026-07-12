import Test from "../../components/Test";
import TimeInput from "../../components/TimeInput";

enum Sport {
  bike = 0,
  row = 1,
  ski = 2,
}

export default function AdminPage() {

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Add Result
      </h1>

      <form className="mt-6 space-y-4">
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

        <Test />
        
        <TimeInput />

        <div>
          <label htmlFor="sport" className="block text-sm font-medium text-gray-700">
            Sport
          </label>

          <select name="sport" id="sport" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
            <option value="">--Please choose an option--</option>
            <option value={Sport.bike}>Bike</option>
            <option value={Sport.row}>Row</option>
            <option value={Sport.ski}>Ski</option>
          </select>

        </div>

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