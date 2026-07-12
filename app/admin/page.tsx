import SportInput from "../../components/SportInput";
import TimeInput from "../../components/TimeInput";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "../lib/superbase";

export default function AdminPage() {

  async function addResult(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const time = formData.get("time");
    const sport = formData.get("sport");
    // console.log(name, time, sport);

    // const { status, statusText } = 
    await supabase
      .from("results")
      .insert({
        athlete: name,
        time: time,
        category: sport,
        race_date: "2025-07-12"
      })

    // console.log(status);
    // console.log(statusText);

    revalidatePath("/");
    redirect("/");
  }

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

        <SportInput />

        <TimeInput />

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
