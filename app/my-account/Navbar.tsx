import Link from "next/link";
import Image from "next/image";
import Logo from "../../components/vader.png";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Yoda Ticketing logo"
        width={75}
        placeholder="blur"
        quality={100}
      />

      <h1>Fran&apos;s Faust.js/Next 13 App Router Sample</h1>
      <Link href="/my-account">My Account</Link>
      <Link href="/my-account/create-post">Draft A Post</Link>
      <Link href="/my-account/drafts">Drafts</Link>
    </nav>
  );
}
