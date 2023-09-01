import Link from "next/link";

function Home() {
  return (
    <Link href={`/patients`} className={"accent-red-950"}>
      {" "}
      To patients list{" "}
    </Link>
  );
}

export default Home;
