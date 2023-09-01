import Link from "next/link";

export function Home() {
  return (
    <Link href={`/patients`} className={"accent-red-950"}>
      {" "}
      To patients list{" "}
    </Link>
  );
}

export default function Page() {
  return <h1 className="text-green-600">Hello, Next.js!</h1>;
}
