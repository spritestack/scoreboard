import ResultsTable from "../components/ResultsTable";
// import { supabase } from "./lib/superbase";
import data from "@/data/results.json";

export default async function Home() {
  // const { data } = await supabase
  //   .from("results")
  //   .select("*")
  //   .order("id");
  // console.log(data);

  return (
    <main className="h-screen flex flex-col p-6">
      <div className="flex flex-row justify-between items-center mb-4 font-sans">
        <h1 className="text-3xl font-bold">
          Results
        </h1>
        <button className="text-3xl font-bold mr-3">+</button>
      </div>

      <ResultsTable data={data} />

    </main >
  );
}
