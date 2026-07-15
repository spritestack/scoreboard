"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "../lib/supabase";

export async function addResult(formData: FormData) {

    const name = formData.get("name");
    const time = formData.get("time");
    const sport = formData.get("sport");
    const race_date = formData.get("race_date");

    // const { status, statusText, error } = 
    await supabase
      .from("results")
      .insert({
        athlete: name,
        time: time,
        category: sport,
        race_date: race_date
      })

    // console.log(status);
    // console.log(statusText);

    revalidatePath("/");
    redirect("/");
  }
  