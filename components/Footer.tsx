import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="p-4 text-center h-16 sm:h-20 w-full border-t mt-20 flex-col justify-center items-center">
      <div className="pb-1">
        Powered by{" "}
        <a href="https://openai.com/" className="hover:underline font-semibold">
          Open AI{" "}
        </a>
        and{" "}
        <a href="https://vercel.com/" className="hover:underline font-semibold">
          {" "}
          Vercel Edge Functions.
        </a>
      </div>
      <div className="flex justify-end relative w-full ">
        <Link
          href="https://github.com/shutootaki"
          className="group"
          aria-label="GitHub"
        >
          <BsGithub
            role="img"
            aria-hidden="true"
            className="fill-slate-500 hover:fill-white mr-3 "
            size={30}
          />
        </Link>
        <Link
          href="https://twitter.com/_takigon"
          className="group"
          aria-label="Zenn"
        >
          <svg
            role="img"
            aria-hidden="true"
            className="fill-slate-500 hover:fill-sky-500 mr-1"
            width="35"
            height="40"
            viewBox="0 0 30 30"
          >
            <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
          </svg>
        </Link>
        <Link
          href="https://twitter.com/_takigon"
          className="group"
          aria-label="Twitter"
        >
          <svg
            role="img"
            aria-hidden="true"
            className="fill-slate-500 hover:fill-sky-500"
            width="45"
            height="45"
            viewBox="0 0 30 30"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};
