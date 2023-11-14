import Link from "next/link";

export function PleaseLogin() {
  return (
    <>
      <div className="mb-4 text-black">
        You must be authenticated!
        <span className="mx-2">
          <Link className="underline hover:bg-blue-200" href={`/login`}>
            Please login first.
          </Link>
        </span>
      </div>
      <div className="text-black">
        Or you can click here to go back to the home page
        <Link className="underline hover:bg-blue-200" href={`/`}>
          🏠
        </Link>
      </div>
    </>
  );
}
