import ResultsTable from "../components/ResultsTable";
import Link from "next/link";
import { supabase } from "./lib/supabase";
// import data from "@/data/results.json";

export default async function Home() {
  const { data } = await supabase
    .from("results")
    .select("*")
  // .order("time", { ascending: true });
  // console.log(data);

  return (
    <main className="h-screen flex flex-col p-6">
      <div className="flex flex-row justify-between items-center mb-4 font-sans">
        <h1 className="text-3xl font-bold">
          Results
        </h1>
        <Link href="/admin" className="text-3xl font-bold">+</Link>
      </div>

      <ResultsTable data={data} />

    </main >
  );
}
