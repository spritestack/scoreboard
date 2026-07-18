"use client";

import { useActionState, useEffect, useState } from "react";
import { login } from "../admin/actions";
import Link from "next/link";

const initialState = {
  error: "",
  timestamp: Date.now(),
};

export default function Login() {

  const [state, formAction, pending] = useActionState(login, initialState);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!state.error) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, [state.timestamp]);

  return (
    <main className="h-dvh flex flex-col overflow-hidden p-6">

      <div className="flex flex-row justify-between items-center mb-4 font-sans">
        <h1 className="text-3xl font-bold">
          Login
        </h1>
        <Link href="/" className="text-3xl font-bold rotate-45 mr-2">+</Link>
      </div>

      <form action={formAction} className="space-y-4" onSubmit={() => setVisible(true)} >
        <div className="mt-7">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 w-full border border-gray-500 rounded-sm p-2"
            required
          />
        </div>

        <div
          className={`
            min-h-6
            transition-opacity
            duration-500
            ${visible ? "opacity-100" : "opacity-0"}
          `}
          aria-live="polite"
        >
          <p className="text-sm text-red-500">
            {state.error}
          </p>
        </div>
        <button
          type="submit"
          className="border w-full mt-2 p-2 text-orange-500 border-orange-500 rounded-sm"
          disabled={pending}
        >
          Login
        </button>
      </form >
    </main >
  );
}
