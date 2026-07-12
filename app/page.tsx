import { supabase } from "./lib/superbase";

export default async function Home() {
  const { data } = await supabase
    .from("results")
    .select("*")
    .order("id");

    console.log(data);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Scoreboard
      </h1>

      {data?.map(team => (
        <div
          key={team.id}
          className="flex justify-between border-b py-2"
        >
          <span>{team.athlete}</span>
          <span>{team.time}</span>
          <span>{team.category}</span>
        </div>
      ))}
    </main>
  );
}