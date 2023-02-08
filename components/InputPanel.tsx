import { BsPencil } from "react-icons/bs";

export const InputPanel = () => {
  return (
    <>
      <div className="max-w-xl w-full">
        <div className="flex mt-20 items-center space-x-3 justify-center">
          <BsPencil size={32} className="mb-5 sm:mb-0" />
          <p className="mx-2 font-medium">Copy your Bio</p>
          <span className="text-slate-500">
            (or write a few sentences about yourself)
          </span>
        </div>
        <textarea
          name="input-area"
          id="input-area"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-3 p-2"
          placeholder={
            "e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com."
          }
        ></textarea>
      </div>
    </>
  );
};
