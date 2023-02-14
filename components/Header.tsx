import Link from "next/link";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GitHubButton } from "./GitHubButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-20 border-b pl-2 sm:px-4">
      <Link href="/" className="flex space-x-3">
        <GiArtificialIntelligence size={40} />
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left">
          GPT-BIOs
        </h1>
      </Link>
      <GitHubButton />
    </header>
  );
};
