import Link from "next/link";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GitHub } from "./GitHub";

export const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 mt-6 pb-8 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <GiArtificialIntelligence size={40} />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          GPT Generate BIO
        </h1>
      </Link>
      <GitHub />
    </header>
  );
};
