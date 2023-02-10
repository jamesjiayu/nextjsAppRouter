import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Page() {
  // const router = useRouter();
  // const pathname = usePathname(); //use for client component
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/#hashid" scroll={false}>
        Scroll to specific id.
      </Link>
    </>
  );
}
