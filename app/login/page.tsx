"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "./action";

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
      type="submit"
      disabled={status.pending}
    >
      {status.pending ? "Loading..." : "Login"}
    </button>
  );
}

export default function Page() {
  const [state, formAction] = useFormState(loginAction, {});

  return (
    <>
      <h2 className="flex justify-center">Login Here</h2>
      <form action={formAction}>
        <fieldset>
          <label htmlFor="usernameEmail">Username or Email</label>
          <input type="name" name="usernameEmail" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </fieldset>

        <SubmitButton />

        {state.error && (
          <p dangerouslySetInnerHTML={{ __html: state.error }}></p>
        )}
      </form>
    </>
  );
}
