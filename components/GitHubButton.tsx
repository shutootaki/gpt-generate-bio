import { FaGithubAlt } from "react-icons/fa";

export const GitHubButton = () => {
  return (
    <a
      className="flex max-w-5xl items-center justify-center space-x-2 rounded-full  border-gray-300  px-4 py-2 transition-colors hover:bg-slate-600 sm:border-2"
      href="https://github.com/shutootaki/gpt-generate-bio"
      target="_blank"
      rel="noreferrer"
    >
      <p className="hidden sm:block">View on GitHub</p>
      <FaGithubAlt size={24} />
    </a>
  );
};
