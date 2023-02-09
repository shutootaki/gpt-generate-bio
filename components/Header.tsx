import Link from "next/link";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GitHub } from "./GitHub";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b pb-7 sm:px-4">
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
