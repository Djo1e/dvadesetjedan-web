import { routes } from "../utils/routes";
import { Popover } from "./popover";
import BitcoinLogo from "../public/bitcoin.png";
// import Image from "next/image";

const communityOptions = [
  { value: "meetup", label: "MEETUP", href: "" },
  { value: "telegram", label: "TELEGRAM", href: "" },
  { value: "twitter", label: "TWITTER", href: "" },
];

export function Header() {
  return (
    <header>
      <a
        href={routes.home}
        className="relative w-min text-white transition ease-in-out hover:text-orange"
      >
        <h1 className="text-[90px] uppercase font-bold w-min">Dvadesetjedan</h1>
        {/* <div className="absolute right-5 top-16"> */}
        {/*   <Image */}
        {/*     src={BitcoinLogo} */}
        {/*     alt="Picture of the author" */}
        {/*     width={40} */}
        {/*     height={40} */}
        {/*     placeholder="blur" */}
        {/*   /> */}
        {/* </div> */}
      </a>
      <section className="w-full">
        <ul className="flex text-4xl uppercase text-white transition ease-in-out">
          <li className="hover:text-orange transition ease-in-out mr-6">
            <a href={routes.podcast}>Podcast</a>
          </li>
          {/* <Popover options={communityOptions}> */}
          {/*   <li className="hover:text-orange transition ease-in-out uppercase">Zajednica</li> */}
          {/* </Popover> */}
          <li className="hover:text-orange transition ease-in-out ml-6">Edukacija</li>
        </ul>
      </section>
    </header>
  );
}
