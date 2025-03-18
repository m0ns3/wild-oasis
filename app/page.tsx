import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis website</h1>
      <Link href="cabins">Explore luxury cabins</Link>
    </div>
  );
}
