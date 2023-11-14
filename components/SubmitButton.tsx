"use client";
import React from "react";

import { useFormStatus } from "react-dom";

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
    >
      {pending ? <span>Submitting...</span> : <span>Submit</span>}
    </button>
  );
};

export default SubmitButton;
