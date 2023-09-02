import Link from "next/link";

function Home() {
  return (
    <>
      <div>
        Page under construction. Please proceed
        <Link href={`/patients`} className={"accent-red-950"}>
          here to patients list
        </Link>
      </div>
    </>
  );
}

export default Home;
